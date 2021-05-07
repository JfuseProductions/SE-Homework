import React from "react";
import ReactDOM from "react-dom";
import '../App.css';
import faker from "faker";

const DisplayVisitors = (props) => {
  return (
    <div class='main-content-item visitor-card'>
      <h1 class="ui header">
        <i class="handshake outline icon"></i>
        <div class="content">
          {props.cardName}
          <div
            style={{color:"#F9F9F9"}}
             class="sub header">Manage feedback</div>
        </div>
        <DisplayNumbers stats={faker.datatype.number()} />

      </h1>
      <img class='image'src={props.photoDisplay} />
    </div>
  );
};

const DisplayNumbers = (props) => {
  return (
    <div class="ui huge statistic">
      <div
        style={{color:"#F9F9F9"}}
        class="value">{props.stats}</div>
    </div>
  );
};

export default DisplayVisitors;
