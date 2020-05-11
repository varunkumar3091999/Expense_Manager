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

store.dispatch(addExpense({ description: 'water bill', amount: 40 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'rent', amount: 1095 }))


// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses)

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(jsx, document.getElementById('app'));


