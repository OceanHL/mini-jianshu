/*
 * @Author: jhl
 * @Date: 2021-05-25 09:45:36
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 11:26:13
 * @Description:
 */
import axios from 'axios';
import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_SCROLL_TOP } from './constants';

const changeHomeData = result => ({
  type: CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList,
});

const addHomeList = (list, nextPage) => ({
  type: ADD_HOME_LIST,
  list: fromJS(list),
  nextPage,
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then(response => {
      const result = response.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = articlePage => {
  return dispatch => {
    axios.get('/api/homeList.json?page=' + (articlePage + 1)).then(response => {
      const result = response.data.data;
      dispatch(addHomeList(result, articlePage + 1));
    });
  };
};

export const toggleTopShow = showScroll => ({ type: TOGGLE_SCROLL_TOP, showScroll });
