/*
 * @Author: jhl
 * @Date: 2021-05-24 14:58:11
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 11:38:57
 * @Description: 负责home页面的数据管理
 */
import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_SCROLL_TOP } from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  writerPage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    writerList: fromJS(action.writerList),
    recommendList: fromJS(action.recommendList),
  });
};

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage,
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case ADD_HOME_LIST:
      return addHomeList(state, action);
    case TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.showScroll);
    default:
      return state;
  }
};
