import React from "react"
import Cube from "../styles/logos/Cube"

const Footer = ({ author }) => {
  return (
    <div className="layout-footer">
      <p className="copy-right">
        © {new Date().getFullYear()}
        {` `}
        {author}
      </p>
      <p>Contact</p>
      <Cube />
    </div>
  )
}

export default Footer
