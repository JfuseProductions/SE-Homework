import React from "react";
import ReactDOM from "react-dom";
// import Display from './displayName'
import Div1 from "./DivOne";
import Div2 from "./DivOne";

class Div3 extends React.Component {
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
        <Div2 />
      </div>
    );
  }
}

export default Div3;
