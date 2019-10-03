import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Local from "../api/Local"
import LocalContext from "../context/LocalContext"
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

  // console.log(process.env.GATSBY_NAME_COOL)
  return (
    <>
      <Local />

      <div className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <LocalContext />
        <footer>
          <div className="barAnimation">
            <div className="shadow">
              <div className="slide" style={{ height: "44px" }}></div>
            </div>
          </div>
          © {new Date().getFullYear()}, Built by
          {` `}
          {data.site.siteMetadata.author}
          <p>Contact</p>
          <Cube />
        </footer>
      </div>
    </>
  )
}

export default Layout
