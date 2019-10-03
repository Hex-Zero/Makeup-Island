import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsContainer from "../containers/ProductsContainer"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  // console.log(products)

  return (
    <Layout>
      <SEO title="Home" />

      <ProductsContainer />
    </Layout>
  )
}

export default IndexPage
