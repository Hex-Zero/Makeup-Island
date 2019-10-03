import React, { useEffect, useState } from "react"

interface Props {}

const LocalContext: React.FC<Props> = ({}) => {
  const [localProducts, setLocalProducts] = useState(null)
  useEffect(() => {
    setLocalProducts(window.localStorage.getItem("DataBase" || null))
  }, [])
  return <div>{localProducts}</div>
}

export default LocalContext
