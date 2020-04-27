import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const editExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      Editing expense with id of  {props.match.params.id}
    </div>
  )
}

export default editExpensePage