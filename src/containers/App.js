import React from "react"
import CartContainer from "./CartContainer"
import ProductsContainer from "./ProductsContainer"

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App
