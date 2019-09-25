import React, { useState } from "react"
import ItemCard from "../components/ItemCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = () => {
  const [cards, setCards] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    1,
    2,
    3,
    4,
    5,
    6,
    1,
    2,
    3,
    4,
    5,
    6,
  ])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="card-container">
        {cards.map(() => (
          <ItemCard />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
