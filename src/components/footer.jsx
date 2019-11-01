import React from "react"
import Cube from "../styles/logos/Cube"

const Footer = ({ author }) => {
  return (
    <div className="layout-footer">
      © {new Date().getFullYear()}, Built by
      {` `}
      {author}
      <p>Contact</p>
      <Cube />
    </div>
  )
}

export default Footer
