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
      <ItemList />
    </Layout>
  )
}

// test

export default IndexPage
