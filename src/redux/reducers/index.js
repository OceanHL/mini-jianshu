/*
 * @Author: jhl
 * @Date: 2021-05-22 10:35:12
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 09:53:29
 * @Description:
 */
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// 导入../../common/header/store的默认导出
import headerReducer from '../../common/header/store';
import homeReducer from '../../pages/home/store';
import detailReducer from '../../pages/detail/store';
import loginReducer from '../../pages/login/store';
export default combineReducers({
  headerState: headerReducer,
  homeState: homeReducer,
  detailState: detailReducer,
  loginState: loginReducer,
});
