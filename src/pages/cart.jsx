import React, { useContext, useEffect, useState } from "react"
import { Cart } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RemoveButton from "../components/RemoveButton"
import ItemSlide from "../components/ItemSlide"

const CartPage = () => {
  const cart = useContext(Cart ? Cart : [])

  const [amount, setAmount] = useState(0)
  const [stripe, setStripe] = useState([])

  useEffect(() => {
    setAmount(
      cart.map(c => c.price * c.amount).reduce((total, num) => total + num, 0)
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

  return (
    <Layout>
      <SEO title="Cart" />
      {amount === 0 ? (
        <>
          <h1 className="empty-notice">
            Your Bag Is Currently Empty. Please add some products to continue
          </h1>
          <div className="other-products">
            <ItemSlide condition="product" />
          </div>
        </>
      ) : (
        <ul className="cart-container card-container">
          {cart.map(item => {
            if (item.amount > 0) {
              return (
                <li
                  key={item.id}
                  className="item-card-box"
                  style={{
                    backgroundImage: `url(${item.src}) `,
                    backgroundSize: "97%",
                  }}
                >
                  {item.title} {item.price}£ x{item.amount}
                  <RemoveButton sku={item.id} />
                </li>
              )
            } else {
              return <></>
            }
          })}
        </ul>
      )}
      {amount !== 0 && (
        <button
          onClick={e => redirectToCheckout(e)}
          className="checkout-button"
        >
          {`Total : ${amount.toFixed(2)} £ `}
          <br></br> Continue To Checkout >>>
        </button>
      )}
    </Layout>
  )
}
export default CartPage
