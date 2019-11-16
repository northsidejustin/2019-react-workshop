import React, { Component } from "react"
import './Card.css'

class Card extends Component {
  constructor(){
    super()
    this.state = {
      isVisited: false
    }
  }
  showModal = () => {
    const { modalFn } = this.props
    modalFn()
    this.setState({
      isVisited: true
    })
  }

  render() {
    const { category, value } = this.props
    const { isVisited } = this.state

    if (category) {
      return <div className="card header">{category}</div>
    } else {
      return (
        <div className={`card ${isVisited ? 'visited' : ''}`} onClick={this.showModal}>
          ${value}
        </div>
      )
    }
  }
}

export default Card
