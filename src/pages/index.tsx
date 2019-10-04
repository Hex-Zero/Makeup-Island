import React from "react"
import DisplayProducts from "../components/DisplayProducts"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <DisplayProducts />
    </Layout>
  )
}

export default IndexPage
