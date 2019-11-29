import React from "react"
import Layout from "../components/layout"
import ActionMessage from "../components/ActionMessage"
import SEO from "../components/seo"

const cancel = () => {
  return (
    <Layout>
      <SEO title="Canceled Purchase" />
      <ActionMessage messageValue="Order Canceled" />
    </Layout>
  )
}

export default cancel
