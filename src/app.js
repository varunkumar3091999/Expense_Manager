import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';


// File imports
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(jsx, document.getElementById('app'));


