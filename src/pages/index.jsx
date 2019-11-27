import React from "react"
import ItemList from "../components/itemList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sub-header">
        <p>Only Best Products</p>
        <p>One Day Delivery</p>
        <p>Highest Quality</p>
      </div>
      <ItemList condition="product" />
      <form name="test" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

// test

export default IndexPage
