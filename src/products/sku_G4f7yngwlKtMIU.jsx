import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ProductInfo from "../components/productInfo"
import PictureSlides from "../components/pictureSlides"

const MainSqiueeze = () => {
  const [state, setState] = useState([])
  const [info, setInfo] = useState({})
  const data = useStaticQuery(graphql`
    query {
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
      allFile(
        filter: {
          relativeDirectory: { eq: "products/main-squeeze-shadow-palette" }
        }
      ) {
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

  return (
    <Layout>
      <div className="Product_Pages">
        <PictureSlides pictures={state} location="1" />
        <ProductInfo
          title={info.title}
          description={info.description}
          more={info.more}
          ingredients={info.ingredients}
          sku={info.sku}
        />
      </div>
    </Layout>
  )
}

export default MainSqiueeze
