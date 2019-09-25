import React, { useState } from "react"
import Image from "./image"
interface Props {}

const ItemCard: React.FC<Props> = ({}) => {
  const [soldout, setSoldout] = useState(false)
  return (
    <div className="item-card-box">
      <div className={`soldOut visible-${soldout}`}>
        <h1>Sold Out</h1>
      </div>
      Item Here
      <Image />
      <button onClick={() => setSoldout(!soldout)}>Buy</button>
    </div>
  )
}

export default ItemCard
