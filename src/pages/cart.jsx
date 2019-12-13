import React, { useContext, useEffect, useState } from "react"
import { Cart } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RemoveButton from "../components/RemoveButton"
import ItemSlide from "../components/ItemSlide"
import AddButton from "../components/AddButton"

const CartPage = () => {
  const cart = useContext(Cart)

  const [amountTotal, setAmountTotal] = useState(0)
  const [stripe, setStripe] = useState([])

  // useEffect(() => {
  //   setAmountTotal(
  //     cart.map(c => c.price * c.amount).reduce((total, num) => total + num, 0)
  //   )
  // }, [cart])

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
      {cart === undefined ? (
        <>
          <h1 className="empty-notice">Your Bag Is Currently Empty</h1>
          <div className="other-products">
            <ItemSlide condition="product" />
          </div>
        </>
      ) : (
        <ul className="cart-container card-container">
          {cart.map(item => {
            return (
              <li
                key={item.id}
                className="item-card-box"
                style={{
                  backgroundImage: `url(${item.src}) `,
                  backgroundSize: "97%",
                }}
              >
                <div className="add-price">
                  <div className="price">£{item.price} </div>
                  <div className="amount-container">
                    <RemoveButton
                      sku={item.id}
                      toZero={false}
                      value="-"
                      className="add-button"
                    />
                    <div className="amount">{item.amount}</div>
                    <AddButton
                      product={item.id}
                      className="add-button"
                      value="+"
                    />
                  </div>
                </div>
                <RemoveButton
                  sku={item.id}
                  toZero={true}
                  value="X"
                  className="remove-button"
                />
              </li>
            )
          })}
        </ul>
      )}
      {amountTotal !== 0 && (
        <button
          onClick={e => redirectToCheckout(e)}
          className="checkout-button"
        >
          {`Total : ${amountTotal.toFixed(2)} £ `}
          <br></br> Continue To Checkout
        </button>
      )}
    </Layout>
  )
}
export default CartPage
