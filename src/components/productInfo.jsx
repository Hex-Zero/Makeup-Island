import React from "react"
import AddButton from "./AddButton"
import Accordion from "./Accordion"
import ItemSlide from "./ItemSlide"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <h1 className="title">{title}</h1>
      <h2 className="description">{description}</h2>
      <h3 className="more">{more}</h3>
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
