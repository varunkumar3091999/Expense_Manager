import { v1 as uuid } from 'uuid'

//Add Expense
export const addExpense = (     // params
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  })

// Remove Expensess
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id
  }
})

//Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

