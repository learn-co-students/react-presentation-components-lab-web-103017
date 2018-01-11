// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {mood: "happy"}
  }

  handleClick = () => {
    const curMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: `${curMood}`
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent;
