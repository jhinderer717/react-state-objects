import React, { Component } from 'react';

import CreatureForm from './CreatureForm';

class Creatures extends Component{

    state = {
        creatures: [
            'Unicorn',
            'Liger',
            'Bigfoot'
        ]
    };

    // Add the stored creature name to our list
    onAddCreature = (creatureParam) => {
        // TODO add creature to state
        // let newCreature = $('input').val();

        console.log('new creature name is', creatureParam);

        // Add to array
        // DON'T do this
        // Will not render, unless we call setState
        // this.state.creatures.push(this.state.newCreatureName);

        this.setState({
            newCreatureName: '',
            creatures: [
                // Array spread operator to the rescue
                // AKA copy/paste operator
                ...this.state.creatures,
                creatureParam
            ]
        });
    }

    loveIt = (event, creatureParam) =>{
        console.log('button pressed', event, creatureParam);
    }

    render(){
        // Using for..of loops
        //
        // let creaturesListItems = [];
        // for (let creature of this.state.creatures){
        //     creaturesListItems.push(
        //         <li>{creature}</li>
        //     );
        // }

        // Using Array.forEach
        // let creaturesListItems = [];
        // this.state.creatures.forEach(creature => {
        //     creaturesListItems.push(
        //         <li>{creature}</li>
        //     );
        // });

        // Using Array.map()
        // let creaturesListItems = this.state.creatures.map(creature => <li>{creature}</li>);

        return(
            <div>
                <h1>Featured Creature of the Night</h1>
                <h3>{this.props.creatureProp}</h3>

                <CreatureForm onAddCreature={this.onAddCreature}/>

                <ul>
                    {this.state.creatures.map((creature, i) =>
                        <li key={i}>{/* Set the key to the index of the item in the array (unique) */}
                            <em>{creature}</em>
                            <button onClick={(event) => this.loveIt(event, creature)}>Bop it</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Creatures;