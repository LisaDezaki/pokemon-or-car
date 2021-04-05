import './App.css';
import React, { Component } from "react";
import { Button, Card, Score } from "./components";
import { data } from "./data.js";
import * as imgs from "./img";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
      flipCard: false,
      previousCards: [],
      remainingCards: data.map(item => item.name),
      score: 0,
      success: null,
    };
  }

  selection = (type)=>  {

    let correctAnswer = data.find(item => item.name === this.state.activeCard).type;

    if (type === correctAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }

    this.setState({
      previousCards: this.state.previousCards.concat(this.state.activeCard),
      remainingCards: this.state.remainingCards.filter((item) => item !== this.state.activeCard),
    });
    setTimeout(() => {
      this.selectNewActiveCard();
    }, 1000 );
  }

  selectNewActiveCard = () => {
    let remainingLength = this.state.remainingCards.length;
    let newIndex = Math.floor(Math.random() * remainingLength);
    this.setState({
      activeCard: this.state.remainingCards[newIndex],
      flipCard: false,
      success: null,
    })
  }

  correctAnswer = () => {
    this.setState({
      flipCard: true,
      score: this.state.score + 1,
      success: true,
    });
  }

  incorrectAnswer = () => {
    this.setState({
      flipCard: true,
      success: false,
    })
  }

  render() {
    const { activeCard, flipCard, score, success } = this.state;

    return (
      <div className="App">
        {data.map((item,i) => (
          <Card
            active={item.name === activeCard}
            flip={flipCard}
            success={success}
            key={i}
            name={item.name}
            type={item.type}
            img={imgs[`img_${item.name}`]}
            onSelection={this.selection}
          />
        ))}

        {!activeCard && (
          <Button onClick={this.selectNewActiveCard}>Start Playing</Button>
        )}
        <Score score={score} />
      </div>
    );
  }
}

export default App;
