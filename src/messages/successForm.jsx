import React from "react"
import Layout from "../components/layout"
import ActionMessage from "../components/ActionMessage"
import SEO from "../components/seo"

const successForm = () => {
  return (
    <Layout>
      <SEO title="Successful Message" />
      <ActionMessage messageValue="Your Message Was Send Successfully. Thank You" />
    </Layout>
  )
}

export default successForm
