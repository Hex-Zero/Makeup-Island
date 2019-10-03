import React from "react"
import Products from "../api/Products"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsContainer from "../containers/ProductsContainer"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  // console.log(products)

  return (
    <Layout>
      <SEO title="Home" />
      <Products />
      <ProductsContainer />
    </Layout>
  )
}

export default IndexPage
