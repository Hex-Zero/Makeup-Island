import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
