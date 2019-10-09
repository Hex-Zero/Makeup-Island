import React, { useContext } from "react"
import { GlobalBase } from "../components/DisplayProducts"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = ({}) => {
  const context = useContext(GlobalBase)
  console.log(context)

  return (
    <Layout>
      <SEO title="Home" />
      <div>{context}</div>
    </Layout>
  )
}

export default IndexPage
