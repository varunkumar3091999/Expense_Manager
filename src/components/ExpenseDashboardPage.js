import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseLIstFilters'


const ExpenseDashboardpage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardpage