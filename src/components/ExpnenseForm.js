import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


//const date = new Date()
const now = moment();

console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocused: false,
      errorMessage: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
    console.log('description');
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
    console.log('note');
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\d\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      //set error error state
      this.setState(() => ({
        errorMessage: 'Please fill amount and description'
      }));
    }
    else {
      this.setState(() => ({
        errorMessage: ''
      }));
      console.log('submitted');
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='description'
            autoFocus
            defaultValue={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="(add a note to your expense)"
            defaultValue={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>
            Add Expense
          </button>

        </form>
      </div>
    )
  }
}