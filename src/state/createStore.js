import { applyMiddleware, createStore as reduxCreateStore } from "redux"
import createLogger from "redux-logger"
import thunk from "redux-thunk"

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
const middleware = [thunk]
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger())
}

// const initialState = { count: 0 }

const createStore = () =>
  reduxCreateStore(reducer, applyMiddleware(...middleware))
export default createStore
