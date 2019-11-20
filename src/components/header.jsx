import PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import { Cart } from "./Context"
import { Link } from "gatsby"
import Logo from "../assets/makeup-islandlogo.svg"
import Title from "../assets/makeup-islandtitle.svg"

const Header = () => {
  const cart = useContext(Cart)
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    setAmount(cart.map(c => c.amount).reduce((total, num) => total + num, 0))
  }, [cart])
  return (
    <header>
      <h1 className="hidden-links-low">
        <Link activeClassName="active" to="/">
          <Title className="branding" />
        </Link>
      </h1>
      <Link activeClassName="active" to="/" className="main-logo">
        <Logo className="logo" />
      </Link>
      <nav>
        <Link activeClassName="active" to="/" className=" header-nav-links">
          Store
        </Link>
        <Link activeClassName="active" to="/new" className="header-nav-links">
          New
        </Link>
        <Link activeClassName="active" to="/sale" className="header-nav-links">
          Sale
        </Link>
        <Link activeClassName="active" to="/cart">
          <FaShoppingBag size="25" />
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
