import React from "react"
import AddButton from "./AddButton"
import Accordion from "./Accordion"
import ItemSlide from "./ItemSlide"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <h4 className="more">{more}</h4>
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
