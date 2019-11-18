import React from "react"
import AddButton from "./AddButton"
import Accortion from "./Accortion"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="more">{more}</div>
      <AddButton product={sku} />
      <Accortion ingredients={ingredients} />
    </div>
  )
}
export default ProductInfo
