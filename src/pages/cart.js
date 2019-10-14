import React, { useContext, useEffect, useState } from "react"
import { Cart } from "../components/Context"
import MakeupPlaceholder from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CartPage = ({}) => {
  const cart = useContext(Cart ? Cart : [])
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    setAmount(
      cart
        .map(c => {
          return c.price * c.amount
        })
        .reduce((total, num) => {
          return total + num
        }, 0)
    )
  }, [cart])
  return (
    <Layout>
      {" "}
      <SEO title="Cart" />
      <ul className="card-container">
        {cart.map(item => {
          return (
            <li key={item.id} className="item-card-box">
              {item.title} ${item.price} x{item.amount}
              <MakeupPlaceholder />
            </li>
          )
        })}
      </ul>{" "}
      {amount === 0 ? "" : `Total : ${amount} $ `}
      {
        <button
          onClick={() => {
            console.log(`Purchase`)
          }}
        >
          Purchase
        </button>
      }
    </Layout>
  )
}
export default CartPage
