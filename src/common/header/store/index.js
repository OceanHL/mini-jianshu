// 把./reducer 的默认导出重命名为 headerReducer再分别导出
// export { default as headerReducer } from './reducer';
// 作为index.js的默认导出
export { default } from './reducer';
export * as actionCreators from './actionCreators';
export * as constants from './constants';
