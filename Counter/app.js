const redux = require('redux')

const initialState = {
  counter: 20
}

// Add Counter
//
// let rootReducer = (state = initialState, action) => {
//   if(action.type == "INC_COUNTER") {
//     return {
//       ...state,
//       counter: state.counter + 1
//     }
//   }
//   return state
// }
//
// const store = redux.createStore(rootReducer)
//
// console.log("Dispatching INC_COUNTER action")
// store.dispatch({
//   type: 'INC_COUNTER'
// })

// Subtract Counter

let rootReducer = (state = initialState, action) => {
  if(action.type == "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 10
    }
  }
  return state
}

const store = redux.createStore(rootReducer)

console.log("Dispatching DEC_COUNTER action")
store.dispatch({
  type: 'DEC_COUNTER'
})


console.log(store.getState())
