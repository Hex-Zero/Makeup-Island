import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import { Cart } from "./Context"
// interface Props {
//   siteTitle: string
// }

const Header = ({ siteTitle }) => {
  const cart = useContext(Cart)
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    setAmount(
      cart
        .map(c => {
          return c.amount
        })
        .reduce((total, num) => {
          return total + num
        }, 0)
    )
  }, [cart])

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
          <Link activeClassName="active" to="/about">
            About
          </Link>
          <Link activeClassName="active" to="/cart">
            Cart{amount === 0 ? "" : ` x ${amount}`}
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
