import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useReducer } from "react"
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

  const [inCart, dispatch] = useReducer(
    cartReducer,
    data.allMongodbMakeupIslandProducts.nodes
  )
  function cartReducer(state, action) {
    switch (action.type) {
      case "add":
        console.log(inCart)
        state.map((current, inx) => {
          if (current.id === action.item.id) {
            current.inventory -= 1
            return current
          }
          return current
        })

      default:
        return state
    }
  }
  useEffect(() => {
    window.localStorage.setItem("Items", JSON.stringify(inCart))
  }, [inCart])
  return (
    <div>
      <ul>
        {inCart.map(item => {
          return (
            <li key={item.id}>
              {item.title} ${item.price}{" "}
              <button
                onClick={() => dispatch({ type: "add", item })}
                disabled={item.inventory <= 0}
              >
                Add To Basket
              </button>{" "}
              x {item.inventory}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DisplayProducts
