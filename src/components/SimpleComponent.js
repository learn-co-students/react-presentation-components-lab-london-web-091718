// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            mood: "happy"
            }
        }

    toggleClick = () => {
        this.setState({ mood: this.state.mood === 'happy' ? 'sad' : 'happy' });
    }

    render() { 
        return ( 
            <div onClick={() => this.toggleClick()}>
                {this.state.mood}
            </div>

         )
    }
}
 
export default SimpleComponent