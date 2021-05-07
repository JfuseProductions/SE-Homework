import React from "react";
import ReactDOM from "react-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div class='menu-item card'>
    <div class="ui icon menu">
      <a class="item">
        <i class="home icon"></i>
      </a>
      <a class="item">
        <i class="bell icon"></i>
      </a>
      <a class="item">
        <i class="comment icon"></i>
      </a>
      <a class="item">
        <i class="cog icon"></i>
      </a>
    </div>
  </div>
  );
};

export default Navbar;
