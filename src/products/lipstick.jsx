import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import { TiArrowBackOutline } from "react-icons/ti"
import MakeupPlaceholder from "../components/image"
const lipstick = () => {
  return (
    <div className="Product_Pages">
      <AniLink
        paintDrip
        color="red"
        duration={1}
        activeClassName="active"
        className="Product_Back_Button"
        to="/"
      >
        <TiArrowBackOutline size={60} />
      </AniLink>
      <MakeupPlaceholder />
      <p>
        Straight off the catwalk, this collection is packed with 3 compelling
        and vibrant shades from purple to a deep purple, almost black. More
        Product Information Free Contour & Glow Palette when you spend £12 on
        selected Revolution Treat Thursday! 20% off cosmetics
      </p>
    </div>
  )
}

export default lipstick
