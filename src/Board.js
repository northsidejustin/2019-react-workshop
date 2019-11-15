//parent component that will hold the cards
import React, { Component } from 'react'
import './Board.css'
import Category from './Category'
import Modal from './Modal'

class Board extends Component {
  constructor(){
    super()
    this.state = {
      displayModal: false,
      categories:[
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        {
          name: 'category 1',
          questions: [
            {
              price: 30,
              content: 'some question 1'
            },
            {
              price: 40,
              content: 'some question 2'
            },
            {
              price: 50,
              content: 'some question 3'
            },
            {
              price: 60,
              content: 'some question 4'
            }
          ]
        },
        
      ]
    }
  }
  render(){
    const {displayModal, modalData} = this.state

    const categories = this.state.categories.map(
      (category, index)=>{
        return (
          <Category
            name={category.name}
            key={index}
            questions={category.questions}
            modalFn={this.showModal}
          />
        )
      }
    )

    return(
      <div className="board">
        { categories }
        <Modal displayModal={displayModal} modalData={modalData}/>
        </div>
    )
  }

  showModal = (question, answer, value) => {
    this.setState({displayModal: true, modalData: {
      question, answer, value
    }})
  }
}

export default Board