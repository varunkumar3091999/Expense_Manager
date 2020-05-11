import expensesReducer from '../../reducers/expenses'; import expenses from '../fixtures/expenses'


// test1
test(
  "set default state",
  () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([])
  }
)

//test2
test(
  "remove expense by ID",
  () => {
    const action = {
      type: "REMOVE_EXPENSE",
      id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
  }
)

//test3
test(
  "should not remove expense when id not found",
  () => {
    const action = {
      type: "REMOVE_EXPENSE",
      id: "-1"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
  }
)

// test4
test(
  "should add expense",
  () => {
    const expense = {
      id: '109',
      description: 'laptop',
      amount: 29500,
      createdAt: 20000,
      note: ''
    }
    const action = {
      type: "ADD_EXPENSE",
      expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
      ...expenses,
      expense
    ])
  }
)

//test 5
test(
  "edit expense with provided id",
  () => {
    const amount = 122000;
    const action = {
      type: "EDIT_EXPENSE",
      id: expenses[1].id,
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
  }
)

test(
  "should not edit expense when not found",
  () => {
    const amount = 122000;
    const action = {
      type: "EDIT_EXPENSE",
      id: "-1",
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
  }
)