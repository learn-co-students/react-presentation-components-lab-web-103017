import React from 'react';

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }

  }

  handleClick = (event) => {
    this.setState({
      mood: 'sad'
    })
  }


  render() {
    console.log(this.state);
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent;
