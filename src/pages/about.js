import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("GATSBY_DATABASE")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      billingAddressCollection: "required",
      items: [
        { sku: "sku_G291Q3fa7YtG2h", quantity: 2 },
        { sku: "sku_G2qHz3WSUmkA6m", quantity: 1 },
      ],
      successUrl: `https://makeupisland.netlify.com/success/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button onClick={event => this.redirectToCheckout(event)}>
        Shadow BUY
      </button>
    )
  }
}

const About = () => {
  return (
    <Layout>
      <SEO title="About Page" />
      <Checkout />
      <h1>Hello from the About Page</h1>
    </Layout>
  )
}

export default About
