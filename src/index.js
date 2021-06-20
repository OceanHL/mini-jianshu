import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import 'normalize.css';
import { GlobalStyle } from './style.js';
import './statics/iconfont/iconfont.css';

ReactDOM.render(
  <>
    <GlobalStyle /> {/* 全局样式 */}
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
