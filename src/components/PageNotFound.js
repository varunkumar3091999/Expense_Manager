import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'


const NotFoundPage = () => (
  <div>
    this is a 404 component
    <Link to='/'>go home</Link>
  </div>
)

export default NotFoundPage