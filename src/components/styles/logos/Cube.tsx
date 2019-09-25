import React from "react"
const reactLogo = require("./react.svg") as string
const typeScript = require("./type.svg") as string
const GraphQL_logo = require("./GraphQL.svg") as string
const gatsby_logo = require("./gatsby.svg") as string

const Cube: React.FC = () => {
  return (
    <div className="main-cubediv">
      <div className="box-cubediv">
        <div id="Front">
          <img src={gatsby_logo} className="logo_scaledown" alt="logo" />
        </div>
        <div id="Back">
          <img
            src={GraphQL_logo}
            className="graphQl-logo logo_scaledown"
            alt="logo"
          />
        </div>
        <div id="Left">
          <img
            src={reactLogo}
            className="react-logo logo_scaledown"
            alt="logo"
          />
        </div>
        <div id="Right">
          <img src={typeScript} className="logo_scaledown" alt="logo" />
        </div>
        <div id="Top" />
        <div id="Bottom" />
      </div>
    </div>
  )
}

export default Cube
