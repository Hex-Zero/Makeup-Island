import React, { useContext, useState } from "react"
import { SetCart, Cart } from "../components/Context"
import { graphql, useStaticQuery } from "gatsby"

const AddButton = ({ product, className, value, toZero }) => {
  const setCart = useContext(SetCart)
  const cart = useContext(Cart)
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        edges {
          node {
            inventory
            sku
          }
        }
      }
      allStripeSku {
        nodes {
          localFiles {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          id
          attributes {
            name
          }
          price
        }
      }
    }
  `)
  const [state, setState] = useState(
    data.allStripeSku.nodes.filter(item => item.id === product)[0]
  )
  const [inventory, setInvetory] = useState(
    data.allMongodbMakeupIslandProducts.edges.filter(
      item => item.node.sku === product
    )[0].node.inventory
  )
  console.log(inventory)

  console.log(state.amount > inventory)

  const handleAdd = productId => {
    setState({
      ...state,
      amount: !state.amount ? (state.amount = 1) : (state.amount += 1),
    })

    setCart(currentState => {
      if (currentState === undefined) {
        return [
          {
            amount: state.amount,
            id: state.id,
            title: state.attributes.name,
            price: (state.price / 100).toFixed(2),
            src: state.localFiles[0].childImageSharp.fluid.src,
          },
        ]
      } else {
        if (currentState.filter(item => item.id === state.id)[0]) {
          currentState.map(item => {
            return item.id === state.id
              ? { ...item, amount: (item.amount += 1) }
              : item
          })
        } else {
          return [
            ...currentState,
            {
              amount: state.amount,
              id: state.id,
              title: state.attributes.name,
              price: (state.price / 100).toFixed(2),
              src: state.localFiles[0].childImageSharp.fluid.src,
            },
          ]
        }
        return [...currentState]
      }
    })
  }
  const handleRemove = () => {
    if (!toZero) {
      if (state.amount !== 1) {
        setState({
          ...state,
          amount: (state.amount -= 1),
        })
      }
    }
  }
  return (
    <>
      <button
        onClick={() => handleAdd(product)}
        className={className}
        disabled={state.amount >= inventory}
        style={{
          background: state.amount >= inventory ? "black" : "var(--main-color)",
        }}
      >
        {value}
      </button>
    </>
  )
}

export default AddButton
