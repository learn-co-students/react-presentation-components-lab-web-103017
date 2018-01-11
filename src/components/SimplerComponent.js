// Code SimplerComponentHere Here
import React from 'react';

const phrase = 'I am just happy'

const SimplerComponent = (props) => (
  <div onClick={props.handleClick}>{phrase}</div>
)

export default SimplerComponent;
