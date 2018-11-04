import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './css/main.scss';
import './scss/material-kit.scss';
import { Provider } from 'react-redux';
import store from './js/store'


ReactDOM.render(
	<Provider store={store}>
	 <App />
	 </Provider>,
	 document.getElementById('app'));
