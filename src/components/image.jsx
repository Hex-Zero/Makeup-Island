import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const MakeupPlaceholder = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/makeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  //
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default MakeupPlaceholder
