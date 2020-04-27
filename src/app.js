import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';

// File imports
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses)

console.log(store.getState());

ReactDom.render(<AppRouter />, document.getElementById('app'));


