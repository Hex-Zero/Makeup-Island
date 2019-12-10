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
      allMongodbMakeupIslandProducts {
        edges {
          node {
            title
            sku
            size
            sale
            isnew
            inventory
            description
            brand
            ingredients
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
          let status = info.filter(current => current.node.sku === item.id)[0]
            .node
          if (
            condition === "product" || condition === "new"
              ? status.isnew
              : false || condition === "sale"
              ? status.sale
              : false
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
          } else {
            return false
          }
        })}
      </ul>
    </>
  )
}

export default ItemList
