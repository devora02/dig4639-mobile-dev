import React from 'react';
import Card from './components/Card/index.js';
import './components/Card/index.css';
import CardList from './components/CardList/index.js';

class App extends React.Component {
  render(){
    return(
      <div className="App">
      <CardList/>
      </div>
    );
  }
}

export default App;