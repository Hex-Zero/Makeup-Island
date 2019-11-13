import React from "react"

const ProductInfo = ({ title, description, more, ingredients }) => {
  return (
    <div className="product-info-container">
      <div>{title}</div>
      <div>{description}</div>
      <div>{more}</div>
      <div>
        {ingredients ? (
          ingredients.map(item => {
            return <div key={item}>{item}</div>
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
export default ProductInfo
