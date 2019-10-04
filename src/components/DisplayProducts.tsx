import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
interface Props {}

const DisplayProducts: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        nodes {
          id
          price
          title
          inventory
        }
      }
    }
  `)
  const [indexItems, setIndexItems] = useState(
    data.allMongodbMakeupIslandProducts.nodes
  )
  const [itemsInTheCart, setItemsInTheCart] = useState(null)

  //   console.log(indexItems)
  return (
    <div>
      <ul>
        {indexItems.map(item => {
          return (
            <li key={item.id}>
              {item.title} ${item.price} <button>Add To Basket</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DisplayProducts
