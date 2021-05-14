import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Header from './components/header.js'
import Search from "./components/searchBar";
import ListItem from "./components/listItem";
import ListDisplay from "./components/listDisplay";
import Footer from './components/footer'


const App = () => {
  const [items, setItems] = useState(["oranges", "apples", "watermelon"]);
  const newItem = item => {setItems(items.concat(item))};
  const removeItem = item => {setItems(
      items.slice().filter( (i) => i !== item))};

    return (
      <div>
        <div><Header/></div>
        <div id="list-container">
          <Search handleSubmit={newItem} />
          <ListDisplay handleClick={removeItem} items={items} />
        </div>
        <div><Footer/></div>
      </div>
    );
  };


export default App;
