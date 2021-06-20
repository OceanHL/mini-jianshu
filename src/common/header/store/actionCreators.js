/*
 * @Author: jhl
 * @Date: 2021-05-23 09:53:56
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-23 20:04:10
 * @Description:
 */
import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({ type: constants.MOUSE_ENTER });

export const mouseLeave = () => ({ type: constants.MOUSE_LEAVE });

export const changePage = page => ({ type: constants.CHANGE_PAGE, page });

export const getList = () => {
  return (dispatch, getState) => {
    // console.log('getState()', getState().getIn(['headerState', 'list']));
    // console.log('getState()', getState().getIn(['headerState', 'list']).size);
    // if (getState().getIn(['headerState', 'list']).size === 0) {
    axios
      .get('/api/headerList.json')
      .then(response => {
        const { data } = response;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log('err');
      });
    // }
  };
};
