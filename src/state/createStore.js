import { createStore } from "redux"

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState)
}
