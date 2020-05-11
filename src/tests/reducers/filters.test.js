import moment from "moment";
import filterRuducer from '../../reducers/filters';

//test 1
test(
  "setUp default filter",
  () => {
    const state = filterRuducer(undefined, { type: "@@INIT" })
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    })
  }
)

// test2
test(
  "set sort by amount filter",
  () => {
    const state = filterRuducer(undefined, { type: "SORT_BY_AMOUNT" })
    expect(state.sortBy).toBe('amount')
  }
)

//test3
test(
  "set sort by date filter",
  () => {
    const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'amount'
    }
    const action = { type: "SORT_BY_DATE" };
    const state = filterRuducer(currentState, action);
    expect(state.sortBy).toBe('date')
  }
)

//test4
test(
  'set Text filter',
  () => {
    const text = "bill"
    const action = {
      type: "SET_TEXT_FILTER",
      text
    }
    const state = filterRuducer(undefined, action)
    expect(state.text).toBe("bill")
  }
)

//test5
test(
  "start date filter",
  () => {
    const startDate = moment();
    const action = {
      type: "SET_START_DATE",
      startDate
    }
    const state = filterRuducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
  }
)

// /text6
test(
  "end date filter",
  () => {
    const endDate = moment();
    const action = {
      type: "SET_END_DATE",
      endDate
    }
    const state = filterRuducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
  }
)