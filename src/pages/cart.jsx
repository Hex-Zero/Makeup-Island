import React, { useContext, useEffect, useState } from "react"
import { Cart } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemSlide from "../components/ItemSlide"
import ShopButton from "../components/ShopButton"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const CartPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          api
        }
      }
    }
  `)
  const cart = useContext(Cart)

  const [amountTotal, setAmountTotal] = useState(0)
  const [stripe, setStripe] = useState([])

  useEffect(() => {
    setAmountTotal(
      cart.map(c => c.price * c.amount).reduce((total, num) => total + num, 0)
    )
  }, [cart])

  useEffect(() => {
    setStripe(window.Stripe(process.env.GATSBY_DATABASE))
  }, [])

  // const redirectToCheckout = async event => {
  //   event.preventDefault()
  //   const sendInventory = () => {
  //     cart.forEach(item =>
  //       fetch(`${data.site.siteMetadata.api}v`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "https://makeupisland.co.uk/cart",
  //         },

  //         body: JSON.stringify({
  //           sku: item.id,
  //           inventory: item.inventory - item.amount,
  //         }),
  //       })
  //     )
  //   }
  //   sendInventory()
  //   const { error } = await stripe.redirectToCheckout({
  //     billingAddressCollection: "required",
  //     items: cart.map(node => {
  //       return { sku: node.id, quantity: node.amount }
  //     }),
  //     successUrl: `https://makeupisland.netlify.com/success/`,
  //     cancelUrl: `https://makeupisland.netlify.com/cancel/`,
  //   })
  //   if (error) {
  //     console.warn("Error:", error)
  //   }
  // }

  return (
    <Layout>
      {/* <SEO title="Cart" />
      {amountTotal <= 0 ? (
        <>
          <h1 className="empty-notice">Your Bag Is Currently Empty</h1>
          <div className="other-products">
            <ItemSlide condition="new" />
          </div>
        </>
      ) : (
        <ul className="cart-container card-container">
          {cart ? (
            cart.map(item => {
              console.log(item)

              return (
                <li key={item.id} className="item-card-box">
                  <Img
                    style={{ position: "absolute" }}
                    className="item-image-background"
                    fluid={item.src}
                  ></Img>
                  <div className="add-price">
                    <div className="price">£{item.price} </div>
                    <div className="amount-container">
                      <ShopButton
                        remove={true}
                        product={item.id}
                        value="-"
                        toZero={false}
                        className="add-button"
                      />
                      <div className="amount">{item.amount}</div>
                      <ShopButton
                        product={item.id}
                        className="add-button"
                        value="+"
                      />
                    </div>
                  </div>
                  <ShopButton
                    remove={true}
                    product={item.id}
                    toZero={true}
                    value="X"
                    className="remove-button"
                  />
                </li>
              )
            })
          ) : (
            <></>
          )}
        </ul>
      )}
      {amountTotal !== 0 && (
        <>
          <button
            onClick={e => redirectToCheckout(e)}
            className="checkout-button"
          >
            {`Total : ${amountTotal.toFixed(2)} £ `}
            <br></br> Continue To Checkout
          </button>
          <h2 className="delivery-info">
            Your items will be delivered to your billing address, using royal
            mails 1st class postal service.
          </h2>
        </>
      )} */}
    </Layout>
  )
}
export default CartPage
