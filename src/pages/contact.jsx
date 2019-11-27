import React from "react"
import Layout from "../components/layout"
const contact = () => {
  return (
    <Layout>
      {/* <h1>EMAIL: ntesrnt</h1>
      <h1>PHONE: ntesrnt</h1>
      <h1>Name: ntesrnt</h1>
      <h1>Info</h1> */}
      <div className="form-container">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="bot-field" />
          <input placeholder="Your e-mail address"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Your message"></textarea>
          {/* <input type="submit" value="Send" className="send-button"></input> */}
          <button>Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default contact
