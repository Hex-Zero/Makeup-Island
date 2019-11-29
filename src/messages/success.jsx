import React from "react"
import Layout from "../components/layout"
import ActionMessage from "../components/ActionMessage"
import SEO from "../components/seo"

const success = () => {
  return (
    <Layout>
      <SEO title="Successful Purchase" />
      <ActionMessage messageValue="Purchase Was Successful. Thank You" />
    </Layout>
  )
}

export default success
