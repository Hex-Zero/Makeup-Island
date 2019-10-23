import AniLink from "gatsby-plugin-transition-link/AniLink"
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
          <AniLink
            swipe
            direction="right"
            top="entry"
            hex="#bf4de2"
            entryOffset={100}
            duration={1}
            activeClassName="active"
            to="/"
          >
            {siteTitle}
          </AniLink>
        </h1>
        <nav>
          <AniLink
            paintDrip
            hex="#bf4de2"
            duration={1}
            activeClassName="active"
            to="/about"
          >
            About
          </AniLink>
          <AniLink
            swipe
            direction="left"
            top="entry"
            hex="#bf4de2"
            entryOffset={100}
            duration={1}
            activeClassName="active"
            to="/cart"
          >
            Cart{amount === 0 ? "" : ` x ${amount}`}
          </AniLink>
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
