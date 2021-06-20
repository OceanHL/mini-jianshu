/*
 * @Author: jhl
 * @Date: 2021-05-26 09:49:54
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 10:35:53
 * @Description:
 */
import axios from 'axios';
import { CHANGE_LOGIN, LOGOUT } from './constans';

const changeLoing = () => ({ type: CHANGE_LOGIN, value: true });

export const logout = () => ({ type: LOGOUT, value: false });

export const login = (account, password) => {
  return dispatch => {
    axios(`/api/login.json?account=${account}&password=${password}`).then(response => {
      const {
        data: { data: result },
      } = response;
      if (result) {
        // 修改login状态, 需要分发dispatch
        dispatch(changeLoing());
      } else {
        alert('登录失败');
      }
    });
  };
};
