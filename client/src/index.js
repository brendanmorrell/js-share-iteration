import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// middleware for async redux actions, if one wants to store async data in redux state
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));


