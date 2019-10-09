import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

const GlobalCart = React.createContext()
const GlobalSetCart = React.createContext()
export const GlobalBase = React.createContext()
const GlobalSetBase = React.createContext()

// interface Props {
//   children: any;
// }

const DisplayProducts = ({ children }) => {
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

  const [local, setLocal] = useState(data.allMongodbMakeupIslandProducts.nodes)
  const [cart, setCart] = useState()

  function handleClick(item, index) {
    setLocal(localState =>
      localState.map(currentLocal => {
        if (currentLocal.id === item.id) {
          currentLocal.inventory -= 1
          setCart(state => {
            if (!state) {
              return [
                {
                  id: currentLocal.id,
                  title: currentLocal.title,
                  price: currentLocal.price,
                  amount: 1,
                },
              ]
            } else if (state.every(e => e.id !== currentLocal.id)) {
              return [
                ...state,
                {
                  id: currentLocal.id,
                  title: currentLocal.title,
                  price: currentLocal.price,
                  amount: 1,
                },
              ]
            } else {
              return state.map(c => {
                if (c.id === currentLocal.id) {
                  c.amount += 1
                  return c
                }
                return c
              })
            }
          })
          return currentLocal
        }
        return currentLocal
      })
    )
  }

  return <GlobalBase.Provider value={local}>{children}</GlobalBase.Provider>

  // return (
  //   <div>
  //     <ul>
  //       {local.map((item, index) => {
  //         return (
  //           <li key={item.id}>
  //             {item.title} ${item.price}{" "}
  //             <button
  //               onClick={() => handleClick(item, index)}
  //               disabled={item.inventory <= 0}
  //             >
  //               {item.inventory <= 0 ? "Out of stock" : "Add To Basket"}
  //             </button>{" "}
  //             x {item.inventory} x {item.amount}
  //           </li>
  //         )
  //       })}
  //     </ul>
  //     {console.log(cart)}
  //   </div>
  // )
}

export default DisplayProducts
