import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
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
        <Link activeClassName="active" to="/about">
          About
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
