import React, { useState } from "react"

interface Props {}

const LocalContext: React.FC<Props> = ({}) => {
  const [localProducts, setLocalProducts] = useState(
    window.localStorage.getItem("DataBase" || null)
  )

  return <div>{localProducts}</div>
}

export default LocalContext
