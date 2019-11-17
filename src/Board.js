//parent component that will hold the cards
import React, { Component } from "react"
import Category from "./Category"
import categoryData from "./constants/categories"
import './Board.css'

class Board extends Component {
  render() {
    const { setModal } = this.props

    const categoryList = categoryData.map((category, index) => {
      return (
        <Category
          key={index}
          name={category.name}
          questions={category.questions}
          modalFn={setModal}
        />
      )
    })

    return (
      <div className="board">
        { categoryList }
      </div>
    )
  }
}

export default Board
