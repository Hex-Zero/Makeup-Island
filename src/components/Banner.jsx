import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ sku }) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts(filter: { template: { eq: false } }) {
        edges {
          node {
            sku
            sale
            new
          }
        }
      }
    }
  `)
  const [info, setInfo] = useState(data.allMongodbMakeupIslandProducts.edges)
  console.log(info)

  return (
    <div className="banner">
      <div className="new">NEW</div>
      <div className="sale">SALE</div>
    </div>
  )
}

export default Banner
