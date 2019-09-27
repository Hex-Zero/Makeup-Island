import React, { useState } from "react"
import { connect } from "react-redux"
import ItemCard from "../components/ItemCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

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
