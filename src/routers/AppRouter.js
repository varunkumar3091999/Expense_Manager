import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import {
  Home,
  Add,
  Edit,
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
          component={Home}
        />
        <Route
          exact
          path='/create'
          component={Add}
        />
        <Route
          exact
          path='/edit/:id'
          component={Edit}
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