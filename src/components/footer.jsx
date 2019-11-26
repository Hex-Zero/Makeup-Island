import React from "react"
import Cube from "../styles/logos/Cube"
import { Link } from "@reach/router"

const Footer = ({ author }) => {
  return (
    <div className="layout-footer">
      <p className="copy-right">
        © {new Date().getFullYear()}
        {` `}
        {author}
      </p>
      <Link to="/contact">Contact</Link>
      <Cube />
    </div>
  )
}

export default Footer
