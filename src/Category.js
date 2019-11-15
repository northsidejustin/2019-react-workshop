import React from 'react'
import Card from './Card'
import './Category.css'

const Category = (props) =>{
  const cards = props.questions.map((q, index) =>{
    return <Card key={index} price={q.price} question={q.question} modalFn={props.modalFn} answer={q.answer}/>
  })
  return(
    <div className="category">
      <Card category={props.name} header/>
      {cards}
    </div>
  )
}

export default Category