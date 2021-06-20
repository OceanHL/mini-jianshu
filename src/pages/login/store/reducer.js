/*
 * @Author: jhl
 * @Date: 2021-05-26 09:49:42
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 10:36:05
 * @Description:
 */
import { fromJS } from 'immutable';
import { CHANGE_LOGIN, LOGOUT } from './constans';

const defaultState = fromJS({
  login: false, // 是否登录
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('login', action.value);
    case LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
};
