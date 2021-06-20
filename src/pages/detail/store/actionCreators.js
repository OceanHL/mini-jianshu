/*
 * @Author: jhl
 * @Date: 2021-05-25 15:27:36
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 10:44:51
 * @Description:
 */
import axios from 'axios';
import { CHANGE_DETAIL } from './constants';
const changeDetail = (title, content) => ({ type: CHANGE_DETAIL, title, content });

export const getDetail = id => {
  return dispatch => {
    axios
      .get(`/api/detail.json?id=${id}`)
      .then(response => {
        const result = response.data.data;
        dispatch(changeDetail(result.title, result.content));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
