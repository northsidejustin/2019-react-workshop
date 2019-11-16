import React, { Component } from "react"
import "./Modal.css"

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
  }

  showAnswerButton = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  closeModal = () =>{
    this.props.onClose()
    this.setState({
      showAnswer: false,
    })
  }

  render() {
    const { modalData = {}, displayModal, onClose } = this.props
    const { showAnswer } = this.state
    return (
      <div className={`modal-container ${displayModal ? 'show' : ''}`}>
        <div className="header">
          <div className="close" onClick={this.closeModal}>&times;</div>
        </div>
        <div className="modal-body">
          <div className="question">{modalData.question}</div>
          <div className="answer">
            { showAnswer ? modalData.answer : ''}
          </div>
          <button className="btn" onClick={this.showAnswerButton}>
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
      </div>
    )
  }
}

export default Modal
