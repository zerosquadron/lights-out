import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Lights Out Game</h3>
          <Light />
        </header>
      </div>
    );
  }
}

class Light extends Component {
  render() {
    return (
      <button className="light">{ this.props.value}</button>
    )
  }
}

export default App;
