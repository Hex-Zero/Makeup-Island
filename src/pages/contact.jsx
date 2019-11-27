import React from "react"
import Layout from "../components/layout"
import { Formik } from "formik"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      {/* <h1>EMAIL: ntesrnt</h1>
      <h1>PHONE: ntesrnt</h1>
      <h1>Name: ntesrnt</h1>
      <h1>Info</h1> */}
      <div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default contact
