import React from "react"
import Layout from "../components/layout"
import { Formik } from "formik"

const contact = () => {
  return (
    <Layout>
      {/* <h1>EMAIL: ntesrnt</h1>
      <h1>PHONE: ntesrnt</h1>
      <h1>Name: ntesrnt</h1>
      <h1>Info</h1> */}
      <div className="form-container">
        <Formik>
          {() => (
            <form
              action="#"
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="bot-field" />
              <input
                name="email"
                type="text"
                placeholder="Your e-mail address"
              ></input>
              {/* <input placeholder="Subject"></input>
              <textarea placeholder="Your message"></textarea> */}
              <input type="submit" value="Send" className="send-button"></input>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default contact
