import React from "react"
import { Link } from "gatsby"

const successForm = () => {
  return (
    <div>
      Your Message Was Send Thank You.
      <Link to="/">
        <button>OK</button>
      </Link>
    </div>
  )
}

export default successForm
