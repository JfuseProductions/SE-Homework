import React from "react";
import ReactDOM from "react-dom";
import Display from "./displayName";

class Div1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: {
        name: "Time and Relative Dimesion in Space",
        caps: false,
      },
    };
  } //Closing Constructor
  render() {
    return (
      <div>
        <Display />
        
      </div>
    );
  }
}

export default Div1;
