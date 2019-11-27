import React from "react"
import Layout from "../components/layout"
// import { Formik } from "formik"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      {/* <h1>EMAIL: ntesrnt</h1>
      <h1>PHONE: ntesrnt</h1>
      <h1>Name: ntesrnt</h1>
      <h1>Info</h1> */}
      <div className="form-container">
        <form
          // action="/successForm"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input placeholder="Your e-mail address"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Your message"></textarea>
          <input type="submit" value="Send" className="send-button"></input>
        </form>
      </div>
    </Layout>
  )
}

export default contact
