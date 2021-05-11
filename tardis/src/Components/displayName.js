import React from "react";
import ReactDOM from "react-dom";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: {
        name: "Time and Relative Dimesion in Space",
        caps: false,
      },
    }; // State End
    this.changeIt = this.changeIt.bind(this);
  }//Constructor End
  changeIt = (text) => {
    if (this.state.tardis.caps){
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    }
    else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div>
        <h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>
      </div>
    );
  }
}

export default Display;
