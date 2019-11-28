import React from "react"
import Layout from "../components/layout"
// import { Formik } from "formik"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h2 className="contact-text">
        If you have any concerns please contact me via e-mail at:
        <span> Makeup.Island.help@gmail.com</span> or fill the form bellow. I
        shall respond to your message as soon as posible.
      </h2>
      <div className="form-container">
        <form
          action="/successForm"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="email"
            type="email"
            placeholder="Your e-mail address"
          ></input>
          <input name="subject" type="text" placeholder="Subject"></input>
          <textarea
            name="message"
            type="text"
            placeholder="Your message"
          ></textarea>
          <input type="submit" value="Send" className="send-button"></input>
        </form>
      </div>
    </Layout>
  )
}

export default contact
