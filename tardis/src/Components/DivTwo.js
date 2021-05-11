import React from "react";
import ReactDOM from "react-dom";
// import Display from './displayName'
import Div1 from "./DivOne";
import Div3 from "./DivThree";

class Div2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: {
        name: "Time and Relative Dimesion in Space",
        caps: false,
      },
    };
  } //Closing Constuctor
  render() {
    return (
      <div>
        <Div3 />

      </div>
    );
  }
}

export default Div2;
