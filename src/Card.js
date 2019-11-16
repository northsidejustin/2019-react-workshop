import React, { Component } from "react"
import "./Card.css"

class Card extends Component {
  constructor(){
    super()
    this.state = {
      isVisited: false
    }
  }
  showModal = () => {
    const { question, answer, price, modalFn} = this.props
    modalFn(question, answer, price)
    this.setState({
      isVisitied: true
    })
  }

  render() {
    const { category, header, price } = this.props

    if (header) {
      return <div className="card header">{category}</div>
    } else {
      return (
        <div className={`card ${this.state.isVisitied ? 'visited' : ''}`} onClick={this.showModal}>
          ${price}
        </div>
      )
    }
  }
}

export default Card
