import React, { useContext, useState } from "react"
import { SetCart } from "./Context"
import { graphql, useStaticQuery } from "gatsby"

const ShopButton = ({ product, className, value, toZero, remove }) => {
  const setCart = useContext(SetCart)

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
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
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
  const [state] = useState(
    data.allStripeSku.nodes.filter(item => item.id === product)[0]
  )
  const [inventory] = useState(
    data.allMongodbMakeupIslandProducts.edges.filter(
      item => item.node.sku === product
    )[0].node.inventory
  )
  const [blocked, setBlocked] = useState(false)
  const handleAdd = () => {
    setCart(currentState => {
      if (currentState.filter(item => item.id === state.id)[0]) {
        currentState.map(item => {
          if (item.id === state.id) {
            if (item.amount < item.inventory) {
              if (item.amount + 1 === item.inventory) {
                setBlocked(true)
              }
              return { ...item, amount: (item.amount += 1) }
            } else {
              return item
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...currentState,
          {
            amount: inventory === 1 ? (setBlocked(true), 1) : 1,
            id: state.id,
            title: state.attributes.name,
            price: (state.price / 100).toFixed(2),
            src: state.localFiles[0].childImageSharp.fluid,
            inventory: inventory,
          },
        ]
      }
      return [...currentState]
    })
  }
  const handleRemove = () => {
    if (!toZero) {
      setCart(current => {
        return current
          .map(item => {
            return item.id === state.id && item.amount > 0
              ? { ...item, amount: (item.amount -= 1) }
              : item
          })
          .filter(item => item.amount > 0)
      })
    } else {
      return setCart(current => current.filter(item => item.id !== state.id))
    }
  }

  return (
    <>
      {remove ? (
        <button onClick={handleRemove} className={className}>
          {value}
        </button>
      ) : (
        <button
          onClick={() => {}}
          className={className}
          disabled={blocked}
          style={{
            background: blocked ? "gray" : "var(--main-color)",
          }}
        >
          {value}
        </button>
      )}
    </>
  )
}

export default ShopButton
