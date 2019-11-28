import React, { useContext } from "react"
import { Cart, SetCart } from "../components/Context"

const RemoveButton = ({ sku, toZero, value, className }) => {
  const cart = useContext(Cart)
  const setCart = useContext(SetCart)

  const handleRemove = itemId => {
    setCart(
      cart.map(item => {
        if (item.id === itemId) {
          return !toZero
            ? { ...item, amount: (item.amount -= 1) }
            : { ...item, amount: 0 }
        } else {
          return item
        }
      })
    )
  }
  return (
    <>
      <button onClick={() => handleRemove(sku)} className={className}>
        {value}
      </button>
    </>
  )
}

export default RemoveButton
