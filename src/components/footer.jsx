import React from "react"
import Cube from "../styles/logos/Cube"
import { Link } from "@reach/router"
import { MdMailOutline } from "react-icons/md"
const Footer = ({ author }) => {
  return (
    <div className="layout-footer">
      <p className="copy-right">
        © {new Date().getFullYear()}
        {` `}
        {author}
      </p>
      <Link to="/contact">
        Contact <MdMailOutline size="20" style={{ verticalAlign: "bottom" }} />
      </Link>
      <Cube />
    </div>
  )
}

export default Footer
