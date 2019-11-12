import React from "react"
import Slider from "react-slick"

const PictureSlides = ({ pictures }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }

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
