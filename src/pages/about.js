import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_BwXB5S7oyugIOi8pKdt0fEQX00HLZwE78p")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      billingAddressCollection: "required",
      items: [{ sku: "sku_G291Q3fa7YtG2h", quantity: 2 }],
      successUrl: `http://localhost:8000/page-2/`,
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
