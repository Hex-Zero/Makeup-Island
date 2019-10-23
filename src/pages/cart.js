import React, { useContext, useEffect, useState } from "react"
import { Cart } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CartPage = () => {
  const cart = useContext(Cart ? Cart : [])
  const [amount, setAmount] = useState(0)
  const [stripe, setStripe] = useState([])

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

  useEffect(() => {
    setStripe(window.Stripe(process.env.GATSBY_DATABASE))
  }, [])

  const redirectToCheckout = async event => {
    event.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      billingAddressCollection: "required",
      items: cart.map(node => {
        return { sku: node.id, quantity: node.amount }
      }),
      successUrl: `https://makeupisland.netlify.com/success/`,
      cancelUrl: `https://makeupisland.netlify.com/cancel/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  console.log(cart)

  return (
    <Layout>
      {" "}
      <SEO title="Cart" />
      <ul className="card-container">
        {cart.map(item => {
          return (
            <li key={item.id} className="item-card-box">
              {item.title} ${item.price} x{item.amount}
              <img src={item.src} width="170px" alt={item.title}></img>
            </li>
          )
        })}
      </ul>{" "}
      {amount === 0 ? "" : `Total : ${amount.toFixed(2)} $ `}
      {amount !== 0 && (
        <button onClick={e => redirectToCheckout(e)}>Purchase</button>
      )}
    </Layout>
  )
}
export default CartPage
