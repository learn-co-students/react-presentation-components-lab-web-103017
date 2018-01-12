import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = (ev) => {
    this.setState(prevState => {
      return {mood: 'sad'}
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}
      </div>
    )
  }

}