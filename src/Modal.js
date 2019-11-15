import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component{
  constructor(){
    super()
  }

  render(){
    const {displayModal, modalData} = this.props
  return displayModal ? 
    <div className="modal">
      <div className="header"></div>
      {modalData.value}
    </div> : null
  }
}

export default Modal