import React from "react"
import { TiArrowSortedDown } from "react-icons/ti"
import { IoIosArrowDown } from "react-icons/io"
const Accortion = ({ ingredients }) => {
  return (
    <div activeClassName="active" className="ingredients accordion">
      <div className="title">
        Ingredients <IoIosArrowDown size={30} className="arrow" />
      </div>
      <div className="list">
        {ingredients ? (
          ingredients.map(item => {
            return (
              <div key={item} className="panel">
                {item}
              </div>
            )
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Accortion
