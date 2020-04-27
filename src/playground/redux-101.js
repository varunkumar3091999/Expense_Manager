import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ setBy = 1 } = {}) => ({
  type: 'SET',
  setBy
})

const resetCount = ({ resetBy = 0 } = {}) => ({
  type: 'RESET',
  resetBy
})


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }

    case 'SET':
      return {
        const: action.setBy
      }

    case 'RESET':
      return {
        count: action.resetBy
      }

    default:
      return state;
  }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5

store.dispatch(incrementCount({ incrementBy: 2 }))

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 3
// })

store.dispatch(decrementCount({ decrementBy: 3 }))

// store.dispatch({
//   type: 'SET',
//   const: 101
// })

store.dispatch(setCount({ setBy: 6 }))

// store.dispatch({
//   type: 'RESET'
// })

store.dispatch(resetCount())





