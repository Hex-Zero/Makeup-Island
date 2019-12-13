import React, { useContext, useState } from "react"
import { DispatchContext, SetCart } from "../components/Context"
import { graphql, useStaticQuery } from "gatsby"

const AddButton = ({ product, className, value }) => {
  // const setState = useContext(DispatchContext)
  const setCart = useContext(SetCart)
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        edges {
          node {
            inventory
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
  const [state] = useState(
    data.allStripeSku.nodes.filter(item => item.id === product)
  )

  console.log(state)

  const handle = productId => {
    setCart(state.filter())
  }
  // const handleAdd = productId => {
  //   setState(localState =>
  //     localState.map(currentLocal => {
  //       if (currentLocal.id === productId) {
  //         !currentLocal.amount
  //           ? (currentLocal.amount = 1)
  //           : (currentLocal.amount += 1)
  //         setCart(state => {
  //           if (!state) {
  //             return [
  //               {
  //                 id: currentLocal.id,
  //                 title: currentLocal.attributes.name,
  //                 price: (currentLocal.price / 100).toFixed(2),
  //                 src: currentLocal.localFiles[0].childImageSharp.fluid.src,
  //                 amount: 1,
  //               },
  //             ]
  //           } else if (state.every(e => e.id !== currentLocal.id)) {
  //             return [
  //               ...state,
  //               {
  //                 id: currentLocal.id,
  //                 title: currentLocal.attributes.name,
  //                 price: (currentLocal.price / 100).toFixed(2),
  //                 src: currentLocal.localFiles[0].childImageSharp.fluid.src,
  //                 amount: 1,
  //               },
  //             ]
  //           } else {
  //             return state.map(c => {
  //               if (c.id === currentLocal.id) {
  //                 c.amount += 1
  //                 return c
  //               }
  //               return c
  //             })
  //           }
  //         })
  //         return currentLocal
  //       }
  //       return currentLocal
  //     })
  //   )
  // }
  return (
    <>
      <button
        onClick={() => handle(product)}
        className={className}
        disabled={false}
      >
        {value}
      </button>
    </>
  )
}

export default AddButton
