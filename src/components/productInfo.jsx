import React, { useState, useEffect } from "react"
import Accordion from "./Accordion"
import ItemSlide from "./ItemSlide"
import { graphql, useStaticQuery } from "gatsby"
import ShopButton from "./ShopButton"

const ProductInfo = ({ title, description, ingredients, sku }) => {
  const [items, setItems] = useState()
  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          id
          price
        }
      }
    }
  `)
  useEffect(() => {
    setItems(data.allStripeSku.nodes.filter(item => item.id === sku)[0])
  }, [setItems, data.allStripeSku.nodes, sku])

  return (
    <div className="product-info-container">
      <div className="info-price">£{items ? items.price / 100 : false}</div>
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      {sku ? (
        <ShopButton product={sku} className="info-add-button" value="Add" />
      ) : (
        <></>
      )}
      <Accordion ingredients={ingredients} />
      <div className="other-products">
        <h2>Other Products You May Like</h2>
        <ItemSlide condition="new" />
      </div>
    </div>
  )
}
export default ProductInfo
