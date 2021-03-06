import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Banner from "./Banner"
import Info from "./assets/info.svg"
import ShopButton from "./ShopButton"
import Img from "gatsby-image"

const ItemList = ({ condition }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          api
        }
      }
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
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
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

  const [info] = useState(data.allMongodbMakeupIslandProducts.edges)
  const [state] = useState(data.allStripeSku.nodes)
  const [inventory, setInventory] = useState(
    info.map(item => {
      return { sku: item.node.sku, inventory: item.node.inventory }
    })
  )
  const handleMoreLink = id => {
    return "/" + id
  }
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(data.site.siteMetadata.api).then(data =>
        data.json()
      )
      setInventory(response)
    }
    getData()
  }, [data.site.siteMetadata.api])
  return (
    <ul className="card-container">
      {state.map(item => {
        let status = info.filter(current => current.node.sku === item.id)[0]
          .node
        let amount = false
        inventory
          ? (amount = inventory.filter(current => current.sku === item.id)[0])
          : (amount = false)
        let show = amount ? amount.inventory >= 1 : false

        if (
          condition === "product" || condition === "new"
            ? status.isnew
            : false || condition === "sale"
            ? status.sale
            : false
        ) {
          if (show) {
            return (
              <li key={item.id} className="item-card-box">
                <Img
                  style={{ position: "absolute" }}
                  className="item-image-background"
                  fluid={item.localFiles[0].childImageSharp.fluid}
                ></Img>
                <Banner key={item.id} sku={item.id}></Banner>
                <Link
                  activeClassName="active"
                  to={handleMoreLink(status.local)}
                  alt="More informtion about the selected product"
                  className="info-container"
                >
                  <button className="info-button" aria-label="More information">
                    <Info className="info-logo" />
                  </button>
                </Link>
                <div className="add-price">
                  <div className="price">£{item.price / 100}</div>
                  <ShopButton
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
        } else {
          return <></>
        }
      })}
    </ul>
  )
}

export default ItemList
