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

  render() {
    const { modalData } = this.props
    const { showAnswer } = this.state

    return (
      <div className="modal-container">
        <div>
          <div className="modal-body">{modalData.question}</div>
          <div className="modal-footer">
            <div>{showAnswer ? modalData.answer : ""}</div>
            <div>
              <button className="btn" onClick={this.showAnswerButton}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
