import React, { Component } from 'react';
import Header from './components/Header/index';
import './App.css';
import images from "../src/images.json";
import Game from "./components/Game/index";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    clicked: false,
    images,
  };


  shuffle = (id) => {
    const images = this.state.images.map(image => {
      if (image.id === id) {
        image.clicked = true;
      } else {

        image.clicked = false;
      }
      return image;
    });
    //this function uses the sort method to shuffle the cards
    images.sort(() => .5 - Math.random());
    this.setState({ images });
  }



  checkClick = (id, alreadyClick) => {

    // if the component has not been clicked 
    if (!alreadyClick) {
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 })
        this.setState({ score: this.state.score + 1 })

      } else {

        this.setState({ score: this.state.score + 1 })
      }

      // change clicked to true
      // call shuffle function
      this.shuffle(id);

    } else {

      this.setState({ score: this.state.score = 0 })
      this.shuffle(id);
    }
  }



  render() {

    return (
      <div className="App">
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          <div className="cards">
            {this.state.images.map(image => (
              <Game
                id={image.id}
                key={image.id}
                image={image.image}
                clicked={image.clicked}
                checkClick={this.checkClick}
              />
            ))}
          </div>
        </Wrapper>
        <Footer />
      </div>
    )

  }
}

export default App;
