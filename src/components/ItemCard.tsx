import React from "react"
import Image from "./image"

interface Props {}

const ItemCard: React.FC<Props> = ({}) => {
  return (
    <div className="item-card-box">
      Item Here
      <Image />
    </div>
  )
}

export default ItemCard
