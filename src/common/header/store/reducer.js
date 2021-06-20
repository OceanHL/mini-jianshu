/*
 * @Author: jhl
 * @Date: 2021-05-22 10:38:54
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-23 16:56:25
 * @Description:
 */
import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [], // immutable对象内部的数组也会变成immutable数组
  page: 1, // 当前第几页
  totalPage: 1, // 一共多少页
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      // immutable对象的set方法， 会结合之前immutable对象的值 和 设置的值，返回一个全新的对象，并不会修改原始的state对象
      return state.set('focused', true);
    case SEARCH_BLUR:
      return state.set('focused', false);
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    case MOUSE_ENTER:
      return state.set('mouseIn', true);
    case MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};
