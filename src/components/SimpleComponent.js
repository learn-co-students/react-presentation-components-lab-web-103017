// Code SimpleComponentHere Here
import React from 'react';
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState({mood: 'sad'}, () => console.log(this.state))
    } else {
      this.setState({mood: 'happy'}, () => console.log(this.state))
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent
