import moment from 'moment';

import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';


//test1
test(
  "shoult generate setStartDate action Object",
  () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
      type: "SET_START_DATE",
      startDate: moment(0)
    })
  }
);


// test2
test(
  "should generate setStartDate action Object",
  () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: "SET_END_DATE",
      endDate: moment(0)
    });
  }
);

// test3
test(
  "Shoult generate a setTextFilter action Object with provided text",
  () => {
    const text = "bill"
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text
    })
  }
);

// test4
test(
  "Shoult generate a setTextFilter action Object with default text",
  () => {
    const action = setTextFilter();
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text: ''
    })
  }
);

// test5
test(
  "sortByDate filter",
  () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: "SORT_BY_DATE"
    })
  }
)

//test5
test(
  "sortByAmount Filter",
  () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: "SORT_BY_AMOUNT"
    })
  }
)