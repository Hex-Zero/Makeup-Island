import React from "react"
import Cube from "./styles/logos/Cube"

interface Props {
  author: string
}

const Footer: React.FC<Props> = ({ author }) => {
  return (
    <div className="layout-footer">
      {" "}
      <div className="barAnimation">
        <div className="shadow">
          <div className="slide" style={{ height: "44px" }}></div>
        </div>
      </div>
      © {new Date().getFullYear()}, Built by
      {` `}
      {author}
      <p>Contact</p>
      <Cube />
    </div>
  )
}

export default Footer
