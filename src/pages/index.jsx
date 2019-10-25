import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useContext, useEffect } from "react"
import { DispatchContext, SetCart, StateContext } from "../components/Context"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const state = useContext(StateContext)
  const setState = useContext(DispatchContext)
  const setCart = useContext(SetCart)

  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          localFiles {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          image
          id
          active
          attributes {
            name
          }
          price
        }
      }
    }
  `)

  useEffect(() => {
    setState(data.allStripeSku.nodes)
  }, [data.allStripeSku.nodes, setState])

  const handleClick = item => {
    setState(localState =>
      localState.map(currentLocal => {
        if (currentLocal.id === item.id) {
          !currentLocal.amount
            ? (currentLocal.amount = 1)
            : (currentLocal.amount += 1)
          setCart(state => {
            if (!state) {
              return [
                {
                  id: currentLocal.id,
                  title: currentLocal.attributes.name,
                  price: (currentLocal.price / 100).toFixed(2),
                  src: currentLocal.localFiles[0].childImageSharp.fluid.src,
                  amount: 1,
                },
              ]
            } else if (state.every(e => e.id !== currentLocal.id)) {
              return [
                ...state,
                {
                  id: currentLocal.id,
                  title: currentLocal.attributes.name,
                  price: (currentLocal.price / 100).toFixed(2),
                  src: currentLocal.localFiles[0].childImageSharp.fluid.src,
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
                <div>
                  {item.attributes.name} ${item.price / 100}{" "}
                  <button
                    onClick={() => handleClick(item)}
                    disabled={item.inventory <= 0}
                  >
                    {/* {item.inventory <= 0 ? "Out of stock" : "Add To Basket"} */}
                    Add To Basket
                  </button>{" "}
                  {item.amount}
                </div>
                <img
                  src={item.localFiles[0].childImageSharp.fluid.src}
                  width="280px"
                  alt={item.attributes.name}
                ></img>
                <button className="Info_Button">More Information</button>
              </li>
            )
          })}
        </ul>
      </div>

      <AniLink
        paintDrip
        color="red"
        duration={1}
        activeClassName="active"
        to="/lipstick"
      >
        About
      </AniLink>
    </Layout>
  )
}

export default IndexPage