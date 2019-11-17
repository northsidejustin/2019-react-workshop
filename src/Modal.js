import React, { Component } from "react"
import './Modal.css'

const ESC = 27;

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
  }

  componentDidUpdate(prevProps) {
    const { displayModal } = this.props

    if (displayModal && !prevProps.displayModal) {
      // add event listener if being displayed
      window.addEventListener('keydown', this.onKeyPress)

    } else if (!displayModal && prevProps.displayModal) {
      // remove event listener if being hidden
      window.removeEventListener('keydown', this.onKeyPress)
    }
  }

  onKeyPress = (event) => {
    if (event.keyCode === ESC) {
      this.closeModal();
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
    const { modalData = {}, displayModal } = this.props
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
