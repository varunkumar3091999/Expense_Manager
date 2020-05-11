// Fixtures = dummy data for testing

import moment from "moment";


// Test data
export default [{
  id: '1',
  description: "gum",
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: "rent",
  note: '',
  amount: 1095,
  createdAt: moment(0).subtract(4, "days").valueOf() // 4 days back from moment(0)
}, {
  id: '3',
  description: "Credit Card",
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, "days").valueOf() // 4 days in future from moment(0)
}
]