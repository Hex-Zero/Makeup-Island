import React, { useState } from "react"
import MakeupPlaceholder from "./image"
interface Props {
  name: string
  amount: number
}

const ItemCard: React.FC<Props> = ({ name, amount }) => {
  const [soldout, setSoldout] = useState(false)
  return (
    <div className="item-card-box">
      <div className={`soldOut visible-${soldout}`}>
        <h1>Sold Out</h1>
      </div>
      {name} Here
      <MakeupPlaceholder />
      <span>
        <button onClick={() => setSoldout(!soldout)}>Add</button> x{amount}
      </span>
    </div>
  )
}

export default ItemCard
