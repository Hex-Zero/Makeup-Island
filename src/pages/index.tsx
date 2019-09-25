import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <p>Makeup Island</p>
    <Image />
  </Layout>
)

export default IndexPage
