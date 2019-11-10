import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import Layout from "../components/layout"

const MainSqiueeze = () => {
  const [state, setState] = useState([])
  const [info, setInfo] = useState({})
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMongodbMakeupIslandProducts(
        filter: {
          template: { eq: false }
          local: { eq: "main-squeeze-shadow-palette" }
        }
      ) {
        edges {
          node {
            title
            sku
            size
            sale
            new
            more
            inventory
            description
            brand
            ingredients
            template
            local
          }
        }
      }
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
  useEffect(() => {
    let newData = data.allMongodbMakeupIslandProducts.edges[0]

    setInfo(newData.node)
  }, [setInfo, data.allMongodbMakeupIslandProducts.edges])
  console.log(info)

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <div className="Product_Pages">
        <div className="Slider">
          <Slider {...settings}>
            {state.map(item => {
              if (item.node.childImageSharp) {
                return (
                  <img
                    key={item.node.childImageSharp.fluid.src}
                    src={item.node.childImageSharp.fluid.src}
                    alt="name"
                  ></img>
                )
              }
            })}
          </Slider>
        </div>
        <div>
          <div>{info.title}</div>
          <div>{info.description}</div>
          <div>{info.more}</div>
          <div>
            {info.ingredients ? (
              info.ingredients.map(item => {
                return <div key={item}>{item}</div>
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MainSqiueeze
