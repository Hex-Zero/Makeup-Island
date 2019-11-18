import React from "react"
import AddButton from "./AddButton"
import Accordion from "./Accordion"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="more">{more}</div>
      <AddButton product={sku} />
      <Accordion ingredients={ingredients} />
      <div className="other-products">Other Products You May Like</div>
    </div>
  )
}
export default ProductInfo
