import React, { useState } from "react"
import Slider from "react-slick"

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
                <img
                  key={item.node.childImageSharp.fluid.src}
                  src={item.node.childImageSharp.fluid.src}
                  alt="name"
                ></img>
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
