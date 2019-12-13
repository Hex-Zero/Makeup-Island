import React, { createContext, useState } from "react"

export const StateContext = createContext()
export const DispatchContext = createContext()
export const Cart = createContext()
export const SetCart = createContext()

const Context = ({ children }) => {
  const [localState, setLocal] = useState([])
  const [cart, setCart] = useState([])
  return (
    <StateContext.Provider value={localState}>
      <DispatchContext.Provider value={setLocal}>
        <SetCart.Provider value={setCart}>
          <Cart.Provider value={cart}>{children} </Cart.Provider>
        </SetCart.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default Context
