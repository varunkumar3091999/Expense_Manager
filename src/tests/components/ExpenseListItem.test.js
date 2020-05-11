import React from 'react';
import { shallow } from "enzyme";

import ExpenseListItem from '../../components/ExpenseLIstItem';
import expenses from '../fixtures/expenses';


test(
  "should render individual expense",
  () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
  }
)