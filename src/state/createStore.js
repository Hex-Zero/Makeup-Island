import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case `INCREMENT`:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    case `DECREMENT`:
      return Object.assign({}, state, {
        count: state.count - 1,
      })

    default:
      return state
  }
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
