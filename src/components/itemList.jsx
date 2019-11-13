import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { DispatchContext, SetCart, StateContext } from "../components/Context"
import AddButton from "./AddButton"

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

  const handleMoreLink = id => {
    return "/" + id
  }

  return (
    <div>
      <ul className="card-container">
        {state.map(item => {
          return (
            <li
              key={item.id}
              className="item-card-box"
              style={{
                backgroundImage: `url(${item.localFiles[0].childImageSharp.fluid.src}) `,
                backgroundSize: "97%",
              }}
            >
              <Link
                activeClassName="active"
                to={handleMoreLink(item.id)}
                alt="More informtion about the selected product"
                className="info-container"
              >
                <button className="info-button">i</button>
                {/* <img
                  src={item.localFiles[0].childImageSharp.fluid.src}
                  width="200px"
                  alt={item.attributes.name}
                ></img>{" "} */}
              </Link>
              {/* <div className="title">{item.attributes.name}</div> */}
              <div className="add-price">
                <div className="price">£{item.price / 100}</div>
                <AddButton product={item.id} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ItemList
