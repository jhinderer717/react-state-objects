import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Define our initial state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'John',
    whereILive: 'St. Paul',
    pizzaTopping: 'pepperoni'
  }

  render() {
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>

        <div>
          {this.state.salutation}! My name is {this.state.name}.
        </div>

        <ul>
          <li>My name is {this.state.name}.</li>
          <li>I live in {this.state.whereILive}</li>
          <li>My favorite pizza topping is {this.state.pizzaTopping}</li>
        </ul>
      </div>
    );
  }
}

export default App;
