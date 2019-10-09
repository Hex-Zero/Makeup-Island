import React from "react"
import Layout from "../components/layout"

interface Props {}

const cart: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <ul>{JSON.stringify(cart)}</ul>
    </Layout>
  )
}
export default cart
