import React, { createContext, useReducer } from "react"

export const StateContext = createContext()
export const DispatchContext = createContext()

const init = {
  theme: "light",
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default Context
