/*
 * @Author: jhl
 * @Date: 2021-05-24 14:59:26
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 09:57:50
 * @Description: home组件整个store的出口文件
 */
// 把./reducer 的默认导出重命名为 homeReducer再分别导出
// export { default as homeReducer } from './reducer';

// 作为index.js的默认导出
export { default } from './reducer';
export * as actionCreators from './actionCreators';
export * as constants from './constants';
