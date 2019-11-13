import React from "react"
import AddButton from "./AddButton"

const ProductInfo = ({ title, description, more, ingredients, sku }) => {
  return (
    <div className="product-info-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="more">{more}</div>
      <AddButton product={sku} />

      {/* <div className="ingredients">
        {ingredients ? (
          ingredients.map(item => {
            return <div key={item}>{item}</div>
          })
        ) : (
          <div></div>
        )}
      </div> */}
    </div>
  )
}
export default ProductInfo
