import React, { useContext, useState, useEffect } from "react"
import { SetCart, Cart } from "./Context"
import { graphql, useStaticQuery } from "gatsby"

const ShopButton = ({ product, className, value, toZero, remove }) => {
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
  const [inventory, setInventroy] = useState(
    data.allMongodbMakeupIslandProducts.edges.filter(
      item => item.node.sku === product
    )[0].node.inventory
  )

  const handleAdd = () => {
    setCart(currentState => {
      if (currentState === undefined) {
        return [
          {
            amount: 1,

            id: state.id,
            title: state.attributes.name,
            price: (state.price / 100).toFixed(2),
            src: state.localFiles[0].childImageSharp.fluid.src,
            inventory: inventory,
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
              amount:
                currentState.amount === undefined
                  ? (currentState.amount = 1)
                  : (currentState.amount += 1),
              id: state.id,
              title: state.attributes.name,
              price: (state.price / 100).toFixed(2),
              src: state.localFiles[0].childImageSharp.fluid.src,
              inventory: inventory,
            },
          ]
        }
        return [...currentState]
      }
    })
  }
  useEffect(() => {
    setInventroy(c => c)
  }, [setInventroy])
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
          onClick={handleAdd}
          className={className}
          disabled={false}
          style={{
            background:
              state.amount >= state.inventory ? "black" : "var(--main-color)",
          }}
        >
          {value}
        </button>
      )}
    </>
  )
}

export default ShopButton
