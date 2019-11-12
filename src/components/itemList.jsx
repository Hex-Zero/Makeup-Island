import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { DispatchContext, SetCart, StateContext } from "../components/Context"

const ItemList = () => {
  const state = useContext(StateContext)
  const setState = useContext(DispatchContext)
  const setCart = useContext(SetCart)
  const [info, setInfo] = useState()

  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts(filter: { template: { eq: false } }) {
        edges {
          node {
            title
            sku
            size
            sale
            new
            more
            inventory
            description
            brand
            ingredients
            template
            local
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

  useEffect(() => {
    setInfo(data.allMongodbMakeupIslandProducts.edges)
  }, [data.allMongodbMakeupIslandProducts.edges])
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
  const handleMoreLink = id => {
    return "/" + id
  }
  console.log(info)

  return (
    <div>
      <ul className="card-container">
        {state.map(item => {
          return (
            <li key={item.id} className="item-card-box">
              <Link
                activeClassName="active"
                to={handleMoreLink(item.id)}
                alt="More informtion about the selected product"
              >
                <button className="Info_Button">i</button>
                <img
                  src={item.localFiles[0].childImageSharp.fluid.src}
                  width="200px"
                  alt={item.attributes.name}
                ></img>{" "}
              </Link>
              <div className="title">{item.attributes.name}</div>
              <div className="add-price">
                £{item.price / 100}{" "}
                <button
                  onClick={() => handleClick(item)}
                  disabled={item.inventory <= 0}
                  className="add-button"
                >
                  {/* {item.inventory <= 0 ? "Out of stock" : "Add To Basket"} */}
                  Add
                </button>{" "}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ItemList
