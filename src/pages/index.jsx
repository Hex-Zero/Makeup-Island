import React from "react"
import ItemList from "../components/itemList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      
      <ItemList />
    </Layout>
  )
}
export default IndexPage
