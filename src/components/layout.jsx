import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="sub-header">
        <p>Only Best Products</p>
        <p>One Day Delivery</p>
        <p>Highest Quality</p>
      </div>
      <main>{children}</main>
      <Footer author={data.site.siteMetadata.author}></Footer>
    </div>
  )
}

export default Layout
