import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const successForm = () => {
  return (
    <Layout>
      <div className="success-form-submit">
        <h1>Your Message Was Send Successfully Thank You</h1>
        <Link to="/" className="ok-button">
          OK
        </Link>
      </div>
    </Layout>
  )
}

export default successForm
