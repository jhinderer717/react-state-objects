import React, { Component } from 'react';

class Creatures extends Component{

    state = {
        newCreatureName: '',
        creatures: [
            'Unicorn',
            'Liger',
            'Bigfoot'
        ]
    };

    // Capture and store the new creature name
    // so we can use it later to add it to the list of creatures
    onChangeCreatureName= (event) => {
        // let newCreatureName = event.target.value;
        this.setState({
            newCreatureName: event.target.value
        });
    }

    // Add the stored creature name to our list
    onAddCreature = () => {
        // TODO add creature to state
        // let newCreature = $('input').val();

        console.log('new creature name is', this.state.newCreatureName);

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
                this.state.newCreatureName
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

                <input 
                    type="text" 
                    placeholder="New Creature Name" 
                    value={this.state.newCreatureName} 
                    onChange={this.onChangeCreatureName} 
                />
                <button onClick={this.onAddCreature}>Add Creature</button>


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