import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import bank from './reducers';
import { selectAccount, deposit } from './actions';

const store = createStore(bank);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(selectAccount('Dick'))

store.dispatch(deposit({id:1, amount: 100}));

unsubscribe();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
