import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { TiArrowBackOutline } from "react-icons/ti"
import Slider from "react-slick"
import Layout from "../components/layout"
import Text from "./main-sqiueeze/text"

const MainSqiueeze = () => {
  const [state, setState] = useState([])
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "products/main-sqiueeze" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    setState(data.allFile.edges)
  }, [data.allFile.edges, setState])
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(data)

  return (
    <Layout>
      <div className="Product_Pages">
        <div className="Slider">
          <Slider {...settings}>
            {state.map(item => {
              if (item.node.childImageSharp) {
                return (
                  <img
                    src={item.node.childImageSharp.fluid.src}
                    alt="name"
                  ></img>
                )
              }
            })}
          </Slider>
        </div>
        <Text />
      </div>
    </Layout>
  )
}

export default MainSqiueeze
