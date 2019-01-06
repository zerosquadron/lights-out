import React, { Component } from 'react';
import './App.css';
import light from './components/light.js';

class Board extends Component {

  clickHandler() {
    console.log(this.state)
    if(this.on === false) {
      return;
    }
    if(this.on === true) {
      const myLight = this.id;
      let coLights = [myLight - 1, myLight + 1, myLight - 5, myLight + 5 ]
      console.log(coLights, myLight);
      let newState = coLights.reduce((acc, curr, index) => {
        if (curr - 1 < 0) {
          return null;
        }
        acc[index] = {id: curr - 1, on: true}
        console.log(acc)
        return acc;

      }, []);
      console.log(newState, this);
      return newState;
    }
  }

  render() {
    console.log('light', this.props);
    const props = this.props;
    return (
      <div className='game'>
        <h3>Lights Out Game</h3>
        <div className='board'>
        { props.lights.map((myLight, indx) => {
          let {id, on} = myLight;
          console.log(id, on)
          return light(id, on);
        })}
        </div>
      </div>
    );
  }
}

export default Board;
