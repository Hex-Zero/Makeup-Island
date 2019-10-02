import React from "react"
import Layout from "../components/layout"
import CartContainer from "../containers/CartContainer"

interface Props {}

const cart: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <CartContainer />
    </Layout>
  )
}
export default cart
