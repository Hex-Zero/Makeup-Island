import React, { useContext } from "react"
import { Cart, SetCart } from "../components/Context"

const RemoveButton = ({ sku }) => {
  const cart = useContext(Cart)
  const setCart = useContext(SetCart)

  const handleRemove = itemId => {
    setCart(
      cart.map(item => {
        if (item.id === itemId) {
          //   return { ...item, amount: (item.amount -= 1) }
          return { ...item, amount: 0 }
        } else {
          return item
        }
      })
    )
  }
  return (
    <>
      <button onClick={() => handleRemove(sku)} className="remove-button">
        X
      </button>
    </>
  )
}

export default RemoveButton
