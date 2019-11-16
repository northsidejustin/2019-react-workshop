import React, { Component } from "react"
import "./Card.css"

class Card extends Component {
  showModal = () => {
    this.props.modalFn(this.props.question, this.props.answer, this.props.price)
  }

  render() {
    const { category, header, price } = this.props

    if (header) {
      return <div className="card header">{category}</div>
    } else {
      return (
        <div className="card" onClick={this.showModal}>
          ${price}
        </div>
      )
    }
  }
}

export default Card
