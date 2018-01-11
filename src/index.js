import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent
      handleClick={e => {
        e.target.style.color = "green";
      }}
    />
  </div>,
  document.getElementById("root")
);
