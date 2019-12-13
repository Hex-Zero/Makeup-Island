import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ sku }) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        edges {
          node {
            sku
            sale
            isnew
          }
        }
      }
    }
  `)
  const [info] = useState(data.allMongodbMakeupIslandProducts.edges)

  return (
    <div className="banner">
      {info.map(item => {
        if (item.node.sku === sku) {
          if (item.node.isnew && item.node.sale) {
            return (
              <>
                <div className="new" key={sku}>
                  NEW
                </div>
                <div className="sale" key="sale">
                  SALE
                </div>
              </>
            )
          } else if (item.node.isnew) {
            return (
              <div className="new" key={sku}>
                NEW
              </div>
            )
          } else if (item.node.sale) {
            return (
              <div className="sale" key={sku}>
                SALE
              </div>
            )
          }
        }
        return false
      })}
    </div>
  )
}

export default Banner
