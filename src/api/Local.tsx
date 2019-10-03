import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
interface Props {}

const Local: React.FC<Props> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMakeupIslandProducts {
        nodes {
          id
          price
          title
          inventory
        }
      }
    }
  `)
  const [localDataBase, setLocalDataBase] = useState(
    JSON.stringify(data.allMongodbMakeupIslandProducts.nodes)
  )
  useEffect(() => {
    window.localStorage.setItem("DataBase", localDataBase)
  }, [])
  console.log(JSON.parse(window.localStorage.getItem("DataBase" || null)))

  return <div></div>
}

export default Local
