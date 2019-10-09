import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { DispatchContext, StateContext } from "./Context"
// interface Props {
//   siteTitle: string
// }

const Header = ({ siteTitle }) => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)

  return (
    <header>
      <div className="barAnimation">
        <div className="shadow">
          <div className="slide" style={{ height: "60px" }}></div>
        </div>
      </div>
      <div className="header-container">
        <h1>
          <Link activeClassName="active" to="/">
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "TOGGLE" })
            }}
          >
            ToGGEL {state.theme}
          </button>
          <Link activeClassName="active" to="/about">
            About
          </Link>
          <Link activeClassName="active" to="/cart">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
