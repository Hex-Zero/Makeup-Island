import React, { useState } from "react"
import Image from "./image"
interface Props {
  name: number
}

const ItemCard: React.FC<Props> = ({ name }) => {
  const [soldout, setSoldout] = useState(false)
  return (
    <div className="item-card-box">
      <div className={`soldOut visible-${soldout}`}>
        <h1>Sold Out</h1>
      </div>
      Item {name} Here
      <Image />
      <span>
        <button onClick={() => setSoldout(!soldout)}>Buy</button>
      </span>
    </div>
  )
}

export default ItemCard
