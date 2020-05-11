import moment from "moment";
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'


// test1
test(
  "should filter by text value",
  () => {
    const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
  }
)

//test2
test(
  "filter by startDate",
  () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
  }
)

//test3
test(
  "filter by endDate",
  () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, "days")
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
  }
)

// test4
test(
  "sort by Date",
  () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
  }
)

// test5
test(
  "sort By amount filter",
  () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
  }
)
