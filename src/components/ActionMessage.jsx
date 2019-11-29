import React from "react"
import { Link } from "gatsby"

const ActionMessage = ({ messageValue }) => {
  return (
    <div className="success-form-submit">
      <h1>{messageValue}</h1>
      <Link to="/" className="ok-button">
        OK
      </Link>
    </div>
  )
}

export default ActionMessage
