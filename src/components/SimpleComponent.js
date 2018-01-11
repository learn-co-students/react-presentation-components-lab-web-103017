// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component{

  constructor(){
    super();
    this.state = {
      mood: "happy"
    }

  }

  handleChange=()=>{
    const currMood = this.state.mood
    if (currMood==="happy"){
      this.setState({
        mood: "sad"
      })
    }
    else{
      this.setState({
        mood: "happy"
      })
    }

  }
  render(){
    return(
      <div onClick={this.handleChange}>
        {this.state.mood}
      </div>
    )
  }


}

export default SimpleComponent
