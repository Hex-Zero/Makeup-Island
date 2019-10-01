import React, { useState } from "react"
import ConnectedCounter from "../components/Counter"
import ItemCard from "../components/ItemCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5])
  return (
    <Layout>
      <SEO title="Home" />
      <ConnectedCounter />
      <div className="card-container">
        {cards.map(x => (
          <ItemCard key={x} name={x} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
