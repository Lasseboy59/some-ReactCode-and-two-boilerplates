import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1551885842591 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 1551885842250 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: 1551885812591 }));
// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store  }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

 