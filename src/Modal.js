import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    };
    this.showAnswerButton = this.showAnswerButton.bind(this);
  }

  showAnswerButton() {
    this.setState(state => {
      return { showAnswer: !state.showAnswer };
    });
  }

  render() {
    const { displayModal, modalData } = this.props;
    return displayModal ? (
      <div className="modal">
        <div className="header"></div>
        {modalData.question}
        <div>
          {(this.state.showAnswer ? modalData.answer: "")}
          <button onClick={this.showAnswerButton}>
            {this.state.showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
