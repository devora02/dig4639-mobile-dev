import React from 'react';
import Card from './components/Card/index.js';
import './components/Card/index.css';

class App extends React.Component {
  render(){
    return(
      <div className="card">
      <Card content="This is a card!"></Card>
      </div>
    );
  }
}

export default App;