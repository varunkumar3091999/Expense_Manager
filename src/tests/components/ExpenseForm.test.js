import React from 'react';
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpnenseForm";
import expenses from '../fixtures/expenses';


test(
  "should render Expense form correctly",
  () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
  }
)

test(
  "should render Expense form correctly with expense data",
  () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
  }
)

test(
  "should render error for invalid data",
  () => {
    const wrapper = shallow(<ExpenseForm />)
    // expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate('submit', {
      preventDefault: () => { }
    })
    expect(wrapper.state("errorMessage").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
  }
)

test(
  "should set description on input change",
  () => {
    const value = "new description"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    })
    // at(index) used to choose the perticular input filed in the form here 0 means the first input field
    expect(wrapper.state("description")).toBe(value)
  }
)

test(
  "should set note on textarea change",
  () => {
    const value = "new note"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    })
    expect(wrapper.state("note")).toBe(value)
  }
)

test(
  'Should get amount on input change with matching to the regex',
  () => {
    const value = "12.12";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value }
    })
    expect(wrapper.state("amount")).toBe(value)
  }
)

test(
  'Should render on amount  change with no  matching to the regex',
  () => {
    const value = "12.12.2";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value }
    })
    expect(wrapper.state("amount")).toBe("")
  }
)

test(
  "should call onSubmit prop for valid form submission",
  () => {
    const onSubmitSpy = jest.fn();
    // onSubmitSpy is a spy function which duplicates onSubmit for testing perposes.
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
    wrapper.find("form").simulate('submit', {
      preventDefault: () => { }
    })
    expect(wrapper.state("errorMessage")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      amount: expenses[1].amount / 100,
      note: expenses[1].note,
      createdAt: expenses[1].createdAt
    });
  });

test(
  "should set new date on date change",
  () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop('onDateChange')(now)
    // prop() enzyme method used to get a single prop of the component ||| props(all the props)
    expect(wrapper.state("createdAt")).toEqual(now)
  })

test(
  "should set new date on date change",
  () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop('onFocusChange')({ focused })
    expect(wrapper.state("calanderFocused")).toEqual(focused)
  })