import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import scores from './store/reducer';

import SentimentService from './services/sentiment';

let store = createStore(scores);

console.log(SentimentService.getScores("this is GREAT"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
