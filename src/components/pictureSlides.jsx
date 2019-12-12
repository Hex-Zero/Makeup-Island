import React, { useState } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"

const PictureSlides = ({ pictures, location }) => {
  const [settings] = useState({
    dots: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: location,
    focusOnSelect: true,
    infinite: false,
  })
  return (
    <>
      <div className="Slider">
        <Slider {...settings}>
          {pictures.map(item => {
            if (item.node.childImageSharp) {
              return (
                <Img
                  key={item.node.childImageSharp.fluid.src}
                  fluid={item.node.childImageSharp.fluid}
                  alt="name"
                ></Img>
              )
            } else {
              return null
            }
          })}
        </Slider>
      </div>
    </>
  )
}

export default PictureSlides
