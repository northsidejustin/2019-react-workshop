import React from 'react'
import Card from './Card'
import './Category.css'

const Category = (props) =>{
  const cards = props.questions.map((question, index) =>{
    return <Card key={index} text={question.price}/>
  })
  return(
    <div className="category">
      <Card text={props.name}/>
      {cards}
    </div>
  )
}

export default Category