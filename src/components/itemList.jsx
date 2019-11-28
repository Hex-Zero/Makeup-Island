import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { DispatchContext, StateContext } from "../components/Context"
import AddButton from "./AddButton"
import Banner from "./Banner"
import Info from "./assets/info.svg"

const ItemList = ({ condition }) => {
  const state = useContext(StateContext)
  const setState = useContext(DispatchContext)
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
  const [info, setInfo] = useState(data.allMongodbMakeupIslandProducts.edges)
  useEffect(() => {
    setState(data.allStripeSku.nodes)
  }, [data.allStripeSku.nodes, setState])

  useEffect(() => {
    setInfo(data.allMongodbMakeupIslandProducts.edges)
  }, [data.allMongodbMakeupIslandProducts.edges])

  const handleMoreLink = id => {
    return "/" + id
  }

  return (
    <>
      <ul className="card-container">
        {state.map(item => {
          {
            if (
              info
                .map(current => {
                  if (current.node.sku === item.id) {
                    if (condition === "new") {
                      if (current.node.new) {
                        return true
                      }
                    } else if (condition === "product") {
                      return true
                    } else if (condition === "sale") {
                      if (current.node.sale) {
                        return true
                      }
                    }
                  } else {
                    return false
                  }
                })
                .includes(true)
            ) {
              return (
                <li
                  key={item.id}
                  className="item-card-box"
                  style={{
                    backgroundImage: `url(${item.localFiles[0].childImageSharp.fluid.src}) `,
                    backgroundSize: "97%",
                  }}
                >
                  <Banner sku={item.id}></Banner>
                  <Link
                    activeClassName="active"
                    to={handleMoreLink(item.id)}
                    alt="More informtion about the selected product"
                    className="info-container"
                  >
                    <button className="info-button">
                      <Info className="info-logo" />
                    </button>
                  </Link>
                  <div className="add-price">
                    <div className="price">£{item.price / 100}</div>
                    <AddButton
                      product={item.id}
                      className="add-button"
                      value="Add"
                    />
                  </div>
                </li>
              )
            }
          }
        })}
      </ul>
    </>
  )
}

export default ItemList
