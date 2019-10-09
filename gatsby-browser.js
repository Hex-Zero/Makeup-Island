import React from "react"
import Context from "./src/components/Context"
export const wrapRootElement = ({ element }) => {
  return <Context>{element}</Context>
}
