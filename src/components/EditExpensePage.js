import React from 'react'
import { connect } from 'react-redux'

import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpnenseForm'

export class EditExpensePage extends React.Component {

  constructor(props) {
    super(props)
  }

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  }

  onRemove = () => {
    console.log('remove')
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >Remove</button>
      </div>
    )
  }
}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense))
//         }}
//       />
//       <button
//         onClick={() => {
//           console.log('remove')
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/')
//         }}
//       >Remove</button>
//     </div>
//   )
// }

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => (dispatch(editExpense(id, expense))),
  removeExpense: (data) => (dispatch(removeExpense(data))),
})


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)