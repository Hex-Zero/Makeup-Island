import { graphql, useStaticQuery } from "gatsby"
import React, { useContext, useEffect } from "react"
import { DispatchContext, SetCart, StateContext } from "../components/Context"
import MakeupPlaceholder from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const state = useContext(StateContext)
  const setState = useContext(DispatchContext)
  const setCart = useContext(SetCart)

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

  useEffect(() => {
    setState(data.allMongodbMakeupIslandProducts.nodes)
  }, [data.allMongodbMakeupIslandProducts.nodes, setState])
  const handleClick = item => {
    setState(localState =>
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
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <ul className="card-container">
          {state.map(item => {
            return (
              <li key={item.id} className="item-card-box">
                {item.title} ${item.price}{" "}
                <button
                  onClick={() => handleClick(item)}
                  disabled={item.inventory <= 0}
                >
                  {item.inventory <= 0 ? "Out of stock" : "Add To Basket"}
                </button>{" "}
                x {item.inventory} x {item.amount}
                <MakeupPlaceholder />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
