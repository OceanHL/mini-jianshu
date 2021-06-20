/*
 * @Author: jhl
 * @Date: 2021-05-26 10:52:11
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 11:11:10
 * @Description:
 */
import React from 'react';
import Loadable from 'react-loadable';

// 异步组件
const LoadableComponent = Loadable({
  loader: () => import('./'), // 需要异步加载的UI组件
  loading: () => <div>正在加载</div>,
  // loading() {
  //   // 组件未加载时显示的Loding组件
  //   return <div>正在加载</div>;
  // },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default LoadableComponent;
