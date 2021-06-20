/*
 * @Author: jhl
 * @Date: 2021-05-22 10:34:06
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-23 15:22:47
 * @Description:
 */
import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
// import mySaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// sagaMiddleware.run(mySaga);

export default store;
