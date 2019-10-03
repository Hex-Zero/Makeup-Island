import { graphql, useStaticQuery } from "gatsby"
import React from "react"
interface Props {}
const Products: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        nodes {
          price
          title
          inventory
        }
      }
    }
  `)
  console.log(JSON.stringify(data.allMongodbMakeupIslandProducts.nodes))
  let products = JSON.stringify(data.allMongodbMakeupIslandProducts.nodes)
  return products
}

export default Products
