import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsContainer from "../containers/ProductsContainer"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProductsContainer />
    </Layout>
  )
}

export default IndexPage
