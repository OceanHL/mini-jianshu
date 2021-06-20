/*
 * @Author: jhl
 * @Date: 2021-05-22 10:37:45
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-22 10:51:17
 * @Description:
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// generator 函数
function* mySaga() {
  // console.log('saga初始化');
  /* 
    takeEvery(actionType, callback);
    只要接收到一个actionType这样类型的action的话，会触发后面的回调函数。
  */
  // yield takeEvery(, );
}

export default mySaga;
