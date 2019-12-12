import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ProductInfo from "../components/productInfo"
import PictureSlides from "../components/pictureSlides"
import SEO from "../components/seo"

const MainSqiueeze = () => {
  const [state, setState] = useState([])
  const [info, setInfo] = useState({})
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts(
        filter: { local: { eq: "shadow-palette--main-squeeze" } }
      ) {
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
      allFile(
        filter: {
          relativeDirectory: { eq: "products/shadow-palette--main-squeeze" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                src
                ...GatsbyImageSharpFluid_tracedSVG
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
      <SEO title={info.title} />
      <div className="Product_Pages">
        <PictureSlides pictures={state} location="0" />
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
