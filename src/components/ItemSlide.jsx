import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useState } from "react"
import Banner from "./Banner"
import Info from "./assets/info.svg"
import ShopButton from "./ShopButton"
import Img from "gatsby-image"

const ItemSlide = ({ condition }) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        edges {
          node {
            title
            sku
            size
            sale
            isnew
            inventory
            description
            brand
            ingredients
            local
          }
        }
      }
      allStripeSku {
        nodes {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          image
          id
          active
          attributes {
            name
          }
          price
        }
      }
    }
  `)
  const [info] = useState(data.allMongodbMakeupIslandProducts.edges)
  const [state] = useState(data.allStripeSku.nodes)

  const handleMoreLink = id => {
    return "/" + id
  }
  const [showItems] = useState(window.innerWidth < 700 ? 1 : 2)

  const [settings] = useState({
    dots: true,
    speed: 400,
    slidesToShow: showItems,
    slidesToScroll: showItems,
    initialSlide: 5,
    focusOnSelect: true,
    infinite: false,
  })
  return (
    <div className="more-item-slide">
      <Slider {...settings}>
        {state.map(item => {
          let status = info.filter(current => current.node.sku === item.id)[0]
            .node
          if (
            condition === "product" || condition === "new"
              ? status.isnew
              : false || condition === "sale"
              ? status.sale
              : false
          ) {
            if (status.inventory >= 1) {
              return (
                <div key={item.id}>
                  <li className="item-card-box ">
                    <Img
                      style={{ position: "absolute" }}
                      className="item-image-background"
                      fluid={item.localFiles[0].childImageSharp.fluid}
                    ></Img>
                    <Banner sku={item.id}></Banner>
                    <Link
                      activeClassName="active"
                      to={handleMoreLink(status.local)}
                      alt="More informtion about the selected product"
                      className="info-container"
                    >
                      <button className="info-button">
                        <Info className="info-logo" />
                      </button>
                    </Link>
                    <div className="add-price">
                      <div className="price">£{item.price / 100}</div>
                      <ShopButton
                        product={item.id}
                        className="add-button"
                        value="Add"
                      />
                    </div>
                  </li>
                </div>
              )
            } else {
              return false
            }
          } else {
            return false
          }
        })}
      </Slider>
    </div>
  )
}

export default ItemSlide
