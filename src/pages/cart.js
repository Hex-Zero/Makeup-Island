import React, { useContext } from "react"
import { Cart } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CartPage = ({}) => {
  const cart = useContext(Cart)

  return (
    <Layout>
      {" "}
      <SEO title="Cart" />
      <ul>
        {cart.map(item => {
          return (
            <li key={item.id}>
              {item.title} x{item.amount}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default CartPage
