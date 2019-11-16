import React from "react"
import Card from "./Card"
import "./Category.css"

const Category = props => {
  const {questions, modalFn, name} = props

  const cards = questions.map((q, index) => {
    return (
      <Card
        key={index}
        modalFn={() => modalFn(q)}
        value={q.value}
      />
    )
  })
  return (
    <div className="category">
      <Card category={name} />
      {cards}
    </div>
  )
}

export default Category
