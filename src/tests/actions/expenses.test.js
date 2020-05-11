import {
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';
import { TestScheduler } from 'jest';


test(
  'should setUp remove expense action object',
  () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
      //  toBe() will not work for objects and arrays so should be using toEqual
      type: "REMOVE_EXPENSE",
      id: '123abc'
    });
  }
);

test(
  'should setUp edit expense action object',
  () => {
    const action = editExpense('123abc', { note: 'bill' })
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: { note: 'bill' }
    });
  }
);

test(
  'add expense with provided value',
  () => {
    const expenseData = {
      description: 'bill',
      note: 'phone bill',
      amount: 1000,
      createdAt: 1000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
        // expect.any()  expect the value to be a specific type and dont care about the actual value

      }
    })
  }
)

test(
  'add expense with default value',
  () => {
    const action = addExpense();
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    })
  }
)

