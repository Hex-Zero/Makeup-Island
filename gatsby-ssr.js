const React = require("react")
const Context = require("./src/components/Context")

exports.wrapRootElement = ({ element }) => {
  return <Context>{element}</Context>
}
