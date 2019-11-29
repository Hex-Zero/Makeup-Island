import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ActionMessage from "../components/ActionMessage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ActionMessage messageValue="No Page At This Directory" />
  </Layout>
)

export default NotFoundPage
