import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      to='/'
      activeClassName='is-active'
      exact
    >
      Dashboard
    </NavLink>
    <NavLink
      to='/create'
      activeClassName='is-active'
      exact
    >
      Add Expense
    </NavLink>
    {/* <NavLink
      to='/help'
      activeClassName='is-active'
      exact
    >
      Help
    </NavLink> */}
  </header>
)

export default Header