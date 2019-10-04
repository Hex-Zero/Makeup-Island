// Unused Redux connection

import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { getAllProducts } from "../actions"
import reducer from "../reducers"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const middleware = [thunk]
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger())
  }

  const store = createStore(reducer, applyMiddleware(...middleware))

  store.dispatch(getAllProducts())
  return <Provider store={store}>{element}</Provider>
}
