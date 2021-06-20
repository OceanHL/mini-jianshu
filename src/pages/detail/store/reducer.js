/*
 * @Author: jhl
 * @Date: 2021-05-25 15:27:27
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 15:57:37
 * @Description:
 */

import { fromJS } from 'immutable';
import { CHANGE_DETAIL } from './constants';

const defaultState = fromJS({
  title: '',
  content: '',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};
