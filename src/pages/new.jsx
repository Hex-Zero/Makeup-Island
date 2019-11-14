import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemList from "../components/itemList"

const New = () => {
  return (
    <Layout>
      <SEO title="New Product" />
      <ItemList condition="new" />
    </Layout>
  )
}

export default New
