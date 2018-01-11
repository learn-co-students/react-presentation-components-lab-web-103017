import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function sayHi() {
  alert('Hi')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sayHi} />
  </div>,
  document.getElementById('root')
);
