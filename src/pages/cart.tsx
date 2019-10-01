import React from "react"
import ConnectedCounter from "../components/Counter"
import Layout from "../components/layout"

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
