import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemList from "../components/itemList"

const Sale = () => {
  return (
    <Layout>
      <SEO title="On Sale" />
      <ItemList condition="sale" />
    </Layout>
  )
}

export default Sale
