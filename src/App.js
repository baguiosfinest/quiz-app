import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { questions } from './questions';
import QuestionList from './Components/QuestionList';
import ScoreBox from './Components/ScoreBox';
import Results from './Components/Results';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions,
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({
      current
    });
  }

  setScore(score) {
    this.setState({
      score
    })
  }

  render(){
    return (
      <div className="">
        { (this.state.current <= this.state.questions.length) ? 
          <ScoreBox { ...this.state } /> : 
          <Results { ...this.state } />  }
        
        <QuestionList 
          { ...this.state } 
          setScore = {this.setScore.bind(this) } 
          setCurrent = { this.setCurrent.bind(this) } 
          />

      </div>
    );
  }
  
}

export default App;
