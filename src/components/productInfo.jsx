import React from "react"
import AddButton from "./AddButton"
import Accordion from "./Accordion"
import ItemSlide from "./ItemSlide"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="more">{more}</div>
      <AddButton product={sku} className="info-add-button" />
      <Accordion ingredients={ingredients} />
      <div className="other-products">
        <h2>Other Products You May Like</h2>
        <ItemSlide condition="new" />
      </div>
    </div>
  )
}
export default ProductInfo
