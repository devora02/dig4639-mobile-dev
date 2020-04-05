import React from 'react';

import Questions from './questions.json'
import { StyleSheet, Text, Button, View } from 'react-native';

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1

class NbaQuestion extends React.Component {
  render() {
    return<>
    <Text style={styles.Text}>{this.props.question}</Text>
    {this.props.answers.map((v, i) =>
    <Button color="#9441f2" title={v.text} onPress={() => this.props.nextQuestion(v.correct)} key={i}/>)}
    </>
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      titleText: "Welcome to our NBA 2020 Quiz!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct) {
    console.log("button pressed")
    if(correct){
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestion === Questions.length - 1) {
      console.log("done")
    } else {
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText:"You answers X",
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion +1
      })
    }
  }
  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'NBA Quiz Starting!',
        counter: this.state.counter +1
      })
    } else {
        this.setState({
          titleText: "NBA Quiz Starting!",
          currentState: QUESTION_STATE,
          counter: 0
        })
        if(this.state.currentState === TITLE_STATE) {
          this.timer = setInterval(() => this.countdown(), 1000)
          clearInterval(this.timer)
        } else {
          this.setState({titleText:"answered!"})
        }
        }
      }
    start() {
      console.log("Starting!")
      this.setState({titleText: "NBA Quiz Starting", counter: 0})
      this.timer = setInterval(() => this.countdown(), 1000)
    }
    render() {
      return (
        <>
          <Text>{this.timeLimit - this.state.counter}</Text>
          {((this.state.currentState === TITLE_STATE) ?
            <>
            <Text style={styles.Text}>{this.state.titleText}</Text>
            <Button title = "start" onPress={()=>this.start()} />
            </>
            : <NbaQuestion
                answers={Questions[this.state.currentQuestion].chooseAnswer} 
                question={Questions[this.state.currentQuestion].question} 
                nextQuestion={(correct) => this.nextQuestion(correct)} />)}
          <Text style={styles.Score}>Score: {this.state.score}</Text>
        </>)
    }
    }

    class App extends React.Component {
      render() {
      return (
        <View style={styles.container}>
          <Text style={styles.Text}>NBA QUIZ</Text>
          <Title></Title>
        </View>
      );
    }
  }

    export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
