import React from "react"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <h1>EMAIL: ntesrnt</h1>
      <h1>PHONE: ntesrnt</h1>
      <h1>Name: ntesrnt</h1>
      <h1>Info</h1>
      <div className="form-container">
        <form>
          <h1>E-mail Me</h1>
          <input placeholder="Your e-mail address"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Your message"></textarea>
        </form>
      </div>
    </Layout>
  )
}

export default contact
