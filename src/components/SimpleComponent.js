// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = e => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
