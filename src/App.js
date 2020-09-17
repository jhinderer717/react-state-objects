import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './Creatures'

class App extends Component {

  // Define our initial state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    creatureOTNight: 'tba',
    user: {
      name: 'John',
      whereILive: 'St. Paul',
      pizzaTopping: 'pepperoni'
    },
  }

  onChangePizza = (event) => {
    let newPizzaTopping = event.target.value;
    console.log('changed pizza topping:', newPizzaTopping);

    // Mutating the user object
    // Mutating the state
    // Don't do this, react won't know to render the user
    // this.state.user.pizzaTopping = newPizzaTopping;

    let oldUser = this.state.user;
    let newUser = {
      ...oldUser,
      pizzaTopping: newPizzaTopping
    }


    this.setState({
      // Create a new object for out state
      // aka "Immutable" state
      user: newUser
    });
  }

  onChangeCreature = (event) =>{
    console.log('test creature of the night', event.target.value);
    this.setState({
      creatureOTNight: event.target.value
    })
  }

  render() {
    // console.log('changed pizza topping', this.state);
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>

        <h4>Mythical Creatures</h4>
        <Creatures creatureProp={this.state.creatureOTNight} />

        <div>
          {this.state.salutation}
        </div>

        <ul>
          <li>My name is {this.state.user.name}.</li>
          <li>I live in {this.state.user.whereILive}</li>
          <li>My favorite pizza topping is {this.state.user.pizzaTopping}</li>
        </ul>

        <h4>Edit user</h4>
        <input type="text" placeholder="Favorite Pizza Topping" onChange={this.onChangePizza} />


        <h4>Creature of the Night</h4>
        <input type="text" placeholder="Creature of the Night" onChange={this.onChangeCreature} />
        
      </div>
    );
  }
}

export default App;
