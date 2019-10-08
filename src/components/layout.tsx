import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import DisplayProducts from "./DisplayProducts"
import Footer from "./footer"
import Header from "./header"
import "./styles/index.scss"

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
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
      <DisplayProducts />
      <main>{children}</main>
      <Footer author={data.site.siteMetadata.author}></Footer>
    </div>
  )
}

export default Layout
