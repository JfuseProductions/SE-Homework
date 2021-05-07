import React from "react";
import ReactDOM from "react-dom";
import '../App.css';
import faker from "faker";

const DisplayRating = (props) => {
  return (
    <div class='content-card'>
      <h2 class="ui header">
        <i class="star outline icon"></i>
        <div class="content">
          {props.cardName}
          <div class="sub header "style={{color:"#F9F9F9"}}>Manage feedback</div>
        </div>
      </h2>
      <DisplayNumbers

        stats={faker.datatype.number()} />
    </div>
  );
};

const DisplayNumbers = (props) => {
  return (
    <div class="ui horizontal statistic">
      <div style={{color:"#F9F9F9"}}class="value">{props.stats}</div>
    </div>
  );
};

export default DisplayRating;
