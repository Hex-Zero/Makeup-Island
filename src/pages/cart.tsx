import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"

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

const cart: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <ConnectedCounter />
      <div>Here is a cart</div>
    </Layout>
  )
}

export default cart
