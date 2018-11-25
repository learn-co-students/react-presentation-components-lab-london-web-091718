import React from 'react'

class SimpleComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = event => {
        const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({
            mood: mood
        })
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent