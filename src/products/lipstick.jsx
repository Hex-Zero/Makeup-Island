import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import { TiArrowBackOutline } from "react-icons/ti"
import Slider from "react-slick"
import MakeupPlaceholder from "../components/image"
const lipstick = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="Product_Pages">
      <Slider {...settings}>
        <div>
          <MakeupPlaceholder />
        </div>
        <div>
          <MakeupPlaceholder />
        </div>
        <div>
          <MakeupPlaceholder />
        </div>
      </Slider>
      <p>
        Straight off the catwalk, this collection is packed with 3 compelling
        and vibrant shades from purple to a deep purple, almost black. More
        Product Information Free Contour & Glow Palette when you spend £12 on
        selected Revolution Treat Thursday! 20% off cosmetics
      </p>
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
    </div>
  )
}

export default lipstick
