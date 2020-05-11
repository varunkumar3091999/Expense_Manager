import { createStore, combineReducers } from 'redux';
import { v1 as uuid } from 'uuid'

//Add Expense
const addExpense = (     // params
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
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  // expense: {
  //   id
  // }
  id
})

//Edit Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//Set Text Filter
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text
})

// Sort By Date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// Sort By Amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

//Set Start Date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

//Set End Date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// Expenses Reducer
const expenseDefaultState = []
const expenseReducer = (state = expenseDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id == action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}

// Filters Reducers
const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}


//store creationg

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(state.expenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 11000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'food', amount: 60, createdAt: -1000 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseOne.expense.id, { amount: 1000 }))

// store.dispatch(setTextFilter('rent'))


// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(100))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1000))
// store.dispatch(setEndDate())



const demoState = {
  expenses: [{
    id: 'sfvdbv',
    description: 'rent',
    node: 'this was the final payment',
    amount: 54500,
    createdAt: 0,

  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',// or date
    startDate: undefined,
    endDate: undefined
  }
}

