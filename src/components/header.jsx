import PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import { Cart } from "./Context"
import { Link } from "gatsby"
import { FaDribbble, FaShoppingBag } from "react-icons/fa"
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
      <h1>
        <Link activeClassName="active" to="/">
          {siteTitle}
        </Link>
        <Link activeClassName="active" to="/">
          Store
        </Link>
      </h1>
      <Link activeClassName="active" to="/">
        <FaDribbble size="60" />
      </Link>
      <nav>
        <Link activeClassName="active" to="/new">
          New
        </Link>
        <Link activeClassName="active" to="/sale">
          Sale
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/cart">
          <FaShoppingBag size="23" />
          {amount ? <div className="amount">{amount}</div> : null}
        </Link>
      </nav>
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
