import React, { Component } from "react"
import "./Card.css"

class Card extends Component {
  constructor() {
    super()
    this.showModal = this.showModal.bind(this)
  }

  showModal() {
    this.props.modalFn(this.props.question, this.props.answer, this.props.price)
  }

  render() {
    const { category, header, price } = this.props

    if (header) {
      return <div className="card">{category}</div>
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
