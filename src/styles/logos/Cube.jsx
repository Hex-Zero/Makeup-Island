import React from "react"
const reactLogo = require("./react.svg")
const typeScript = require("./type.svg")
const GraphQL_logo = require("./GraphQL.svg")
const gatsby_logo = require("./gatsby.svg")

const Cube = () => {
  return (
    <div className="main-cubediv">
      <div className="box-cubediv">
        <div id="Front">
          <img
            src={reactLogo}
            className="logo_scaledown react-logo"
            alt="logo"
          />
        </div>
        <div id="Back">
          <img
            src={GraphQL_logo}
            className="graphQl-logo logo_scaledown"
            alt="logo"
          />
        </div>
        <div id="Left">
          <img src={gatsby_logo} className=" logo_scaledown" alt="logo" />
        </div>
        <div id="Right">
          <img src={typeScript} className="logo_scaledown" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Cube
