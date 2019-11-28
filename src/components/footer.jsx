import React from "react"
import Cube from "../styles/logos/Cube"
import { Link } from "@reach/router"
import { MdMailOutline } from "react-icons/md"
const Footer = ({ author }) => {
  return (
    <div className="layout-footer">
      <a href="https://github.com/Hex-Zero" className="author-link">
        © {author}
      </a>
      <Link to="/contact" className="contact-link">
        Contact <MdMailOutline size="20" style={{ verticalAlign: "bottom" }} />
        {/*The style above allows the svg to align with the text */}
      </Link>
      <Cube />
    </div>
  )
}

export default Footer
