import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
const Accortion = ({ ingredients }) => {
  const [open, setOpen] = useState("")

  const handleExtendAccordion = () => {
    !open ? setOpen("extended") : setOpen("")
  }
  return (
    <div
      className={`ingredients accordion ${open}`}
      onClick={() => handleExtendAccordion()}
    >
      <div className="accortion-title">
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
