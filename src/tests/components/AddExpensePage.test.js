import React from 'react';
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;

// lifeCycle methods in jest afterEach(fn), afterAll(fn), BeforeAll(fn), BeforeEach(fn)  mostly used to avoid duplication of code.

beforeEach(() => {
  addExpense = jest.fn(); //spy
  history = { push: jest.fn() }; //spy
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test(
  "should render add expense page correctly",
  () => {
    expect(wrapper).toMatchSnapshot();
  }
)

test(
  "should handle onsubmit",
  () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
  }
)