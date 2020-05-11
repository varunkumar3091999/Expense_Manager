import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import {
  ExpenseDashboardPage,
  AddExpensePage,
  EditExpensePage,
  Help,
  PageNotFound,
  Header
}
  from '../components/index'




const AppRouter = () => (
  < BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          component={ExpenseDashboardPage}
        />
        <Route
          exact
          path='/create'
          component={AddExpensePage}
        />
        <Route
          exact
          path='/edit/:id'
          component={EditExpensePage}
        />
        <Route
          exact
          path='/help'
          component={Help}
        />

        <Route
          component={PageNotFound}
        />
      </Switch>
    </div>
  </BrowserRouter >
)


export default AppRouter