import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "./header"
import "./styles/index.scss"
import Cube from "./styles/logos/Cube"

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
    <>
      <div className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="barAnimation">
            <div className="shadow">
              <div className="slide" style={{ height: "44px" }}></div>
            </div>
          </div>
          © {new Date().getFullYear()}, Built by
          {` `}
          {data.site.siteMetadata.author}
          <Cube />
        </footer>
      </div>
    </>
  )
}

export default Layout
