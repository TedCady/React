import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}
                
export default LightSwitch;

// need to do something to be able to switch it off by a click

// <button onClick={ () => { this.state.position = "Off" } }>Flip Switch</button>

// //this will allow us to switch the light off byh clicking...however not back on

// <button onClick={ () => { this.setState({ position: "Off" }) } }>Flip Switch</button>


// we need something else to be able to go and forth from "on" to "off"

// this method goes inside of the LightSwitch Component
flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }

// rewrite button function to the following:

<button onClick={ this.flipSwitch }>Flip Switch</button>