//parent component that will hold the cards
import React, { Component } from "react"
import "./Board.css"
import Category from "./Category"
import Modal from "./Modal"

class Board extends Component {
  constructor() {
    super()
    this.state = {
      displayModal: false,
      categories: [
        {
          name: "CANADA",
          questions: [
            {
              price: 200,
              question:
                "How many provinces and territories are there in Canada?",
              answer: "Canada has ten provinces and three territories."
            },
            {
              price: 400,
              question: "How many time zones are there in Canada?",
              answer: "Canada has six time zones."
            },
            {
              price: 600,
              question:
                "True/False: Canada is the third largest country in the world?",
              answer:
                "False. Ca  nada is the second largest country in the world."
            },
            {
              price: 800,
              question: "What are Canada's national sports?",
              answer: "Hockey and lacrosse are Canada’s national sports."
            },
            {
              price: 1000,
              question:
                "How much of the world’s renewable water does Canada have?",
              answer: "Canada has 7% of the world's renewable fresh water."
            }
          ]
        },
        {
          name: "WORDS WITH 5 VOWELS",
          questions: [
            {
              price: 200,
              question: "This adjective means showy & intended to impress",
              answer: "OSTENTATIOUS"
            },
            {
              price: 400,
              question:
                "To inject someone with a small amount of a disease so that they can become immune to it",
              answer: "TO INOCULATE"
            },
            {
              price: 600,
              question: "Dancing Queen can feel the beat from this instrument",
              answer: "TAMBOURINE"
            },
            {
              price: 800,
              question:
                "It sounds like you're writing a novel but it means to empower or formally sanction an act",
              answer: "AUTHORIZE"
            },
            {
              price: 1000,
              question: "Ecstatic happiness",
              answer: "EUPHORIA"
            }
          ]
        },
        {
          name: "SOUNDS LIKE IT TO ME",
          questions: [
            {
              price: 200,
              question:
                "If your high-flying idea turns out to be a dud it lands with this sound that rhymes with dud",
              answer: "THUD"
            },
            {
              price: 400,
              question:
                "Hearing this hyphenated sound of tiny feet means you have kids in the house or mice",
              answer: "PITTER-PATTER"
            },
            {
              price: 600,
              question:
                "After a few hours in the hot sun I'm ready to drink a cold beverage this way also an engine sound",
              answer: "CHUG"
            },
            {
              price: 800,
              question: "Large ones can measure more than 5 feet across",
              answer: "A GONG"
            },
            {
              price: 1000,
              question: "Hey! It's a 6-letter bray from Mr. Ed",
              answer: "WHINNY"
            }
          ]
        },
        {
          name: "SINGLE-NAMED CELEBS",
          questions: [
            {
              price: 200,
              question:
                "She's been caught in Peter Parker's web playing MJ in Marvel's Spider-Man flicks",
              answer: "ZENDAYA"
            },
            {
              price: 400,
              question:
                "In 2010 back when she still spelled her name with a dollar sign she had a No. 1 hit with We R Who We R",
              answer: "KE$HA"
            },
            {
              price: 600,
              question:
                "Bassist for the Red Hot Chili Peppers he's acted in films like Baby Driver & The Big Lebowski",
              answer: "FLEA"
            },
            {
              price: 800,
              question:
                "This British model almost had a date with Elwood in The Blues Brothers but it didn't stick",
              answer: "TWIGGY"
            },
            {
              price: 1000,
              question:
                "This Mogadishu-born supermodel was smokin' on the big screen opposite James Kirk in Star Trek VI",
              answer: "IMAN"
            }
          ]
        },
        {
          name: "MOVIE CHALLENGE",
          questions: [
            {
              price: 200,
              question:
                "Hiccup is the hero of this animated trilogy about Vikings & the creatures they once feared",
              answer: "HOW TO TRAIN YOUR DRAGON"
            },
            {
              price: 400,
              question: "Bo Derek played this man's stepmother in Tommy Boy",
              answer: "CHRIS FARLEY"
            },
            {
              price: 600,
              question:
                "In 2019 Christina Hendricks revealed that's her hand holding the rose on the poster for this 1999 Best Picture Oscar winner",
              answer: "AMERICAN BEAUTY"
            },
            {
              price: 800,
              question:
                "Spanish slang for hitman provides the title of this drug cartel thriller with Benicio del Toro & its Day of the Soldado sequel",
              answer: "SICARIO"
            },
            {
              price: 1000,
              question:
                "Name of the leopard Katharine Hepburn is Bringing Up in a screwball classic",
              answer: "BABY"
            }
          ]
        },
        {
          name: "RED",
          questions: [
            {
              price: 200,
              question:
              "It's the Red Planet",
              answer: "MARS"
            },
            {
              price: 400,
              question: "When blood goes through these organs it turns red",
              answer: "LUNGS"
            },
            {
              price: 600,
              question:
                "Pennyworth or E. Neuman",
              answer: "ALFRED"
            },
            {
              price: 800,
              question:
                "Prey's proverbial foe",
              answer: "PREDATOR"
            },
            {
              price: 1000,
              question:
                "The name of this cosmetic that can turn your cheeks red mean red",
              answer: "ROUGE"
            }
          ]
        }
      ]
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState(prevState => ({ displayModal: !prevState.displayModal }))
  }
  render() {
    const { displayModal, modalData } = this.state

    const categories = this.state.categories.map((category, index) => {
      return (
        <Category
          name={category.name}
          key={index}
          questions={category.questions}
          modalFn={this.showModal}
        />
      ) 
    })

    return (
      <div>
        {displayModal ? (
          <div className="modal">
            <span className="close" onClick={this.toggleModal}>
              &times;
            </span>
            <Modal displayModal={displayModal} modalData={modalData} />
          </div>
        ) : (
          <div className="board">{categories}</div>
        )}
      </div>
    )
  }

  showModal = (question, answer, value) => {
    this.setState({
      displayModal: true,
      modalData: {
        question,
        answer,
        value
      }
    })
  }
}

export default Board
