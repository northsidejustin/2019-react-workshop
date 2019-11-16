import React from "react"
import "./Card.css"

const Card = (props) => {
  const { category, modalFn, value } = props

  if (category) {
    return <div className="card header">{category}</div>
  } else {
    return (
      <div className="card" onClick={modalFn}>
        ${value}
      </div>
    )
  }
}

export default Card
