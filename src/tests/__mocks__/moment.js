// import moment from "moment";
// cannot import modules in mock files
//there for "require" actual module. eg: below

const moment = jest.requireActual('moment');

export default (timeStamp = 0) => {
  return moment(timeStamp)
}