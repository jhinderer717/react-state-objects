import React, { Component } from 'react';

class CreatureForm extends Component{
    state = {
        newCreatureName: ""
    }

    // Capture and store the new creature name
    // so we can use it later to add it to the list of creatures
    onChangeCreatureName= (event) => {
        // let newCreatureName = event.target.value;
        console.log('test', event.target.value);
        this.setState({
            newCreatureName: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Form goes here</h1>
                <input 
                    type="text" 
                    placeholder="New Creature Name" 
                    value={this.state.newCreatureName} 
                    onChange={this.onChangeCreatureName} 
                />
                <button onClick={() => this.props.onAddCreature(this.state.newCreatureName)}>Add Creature</button>
            </div>
        )
    }
}

export default CreatureForm;