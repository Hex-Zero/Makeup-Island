import React, { useState } from "react"
import ConnectedCounter from "../components/Counter"
import ItemCard from "../components/ItemCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  const [cards, setCards] = useState<string[]>([
    "pallet",
    "shadows",
    "lipstick",
  ])
  const [amount, setAmount] = useState([3, 4, 5])
  return (
    <Layout>
      <SEO title="Home" />
      <ConnectedCounter />
      <div className="card-container">
        {cards.map((x, index) => (
          <ItemCard key={x} name={x} amount={amount[index]} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
