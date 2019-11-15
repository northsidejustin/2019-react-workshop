import React from 'react'
import Card from './Card'
import './Category.css'

const Category = (props) =>{
  const cards = props.questions.map((question, index) =>{
    return <Card key={index} price={question.price} content={question.content} modalFn={props.modalFn}/>
  })
  return(
    <div className="category">
      <Card category={props.name} header/>
      {cards}
    </div>
  )
}

export default Category