import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../containers/App"

const About: React.FC = () => (
  <Layout>
    <SEO title="About Page" />
    <App />
    <h1>Hello from the About Page</h1>
  </Layout>
)

export default About
