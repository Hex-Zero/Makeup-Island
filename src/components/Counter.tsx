import React from "react"
import { connect } from "react-redux"

interface Props {
  count: number
  increment: any
  decrement: any
}

const Counter: React.FC<Props> = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    decrement: () => dispatch({ type: `DECREMENT` }),
  }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default ConnectedCounter
