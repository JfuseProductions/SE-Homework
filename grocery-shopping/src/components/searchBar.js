import React, { useState } from "react";
import ListItem from "./listItem";
import ListDisplay from "./listDisplay";

const Search = (props) => {
  const [items, setItems] = useState([
    "oranges", "apples", "candy"
  ]);
  const[value,setValue]=useState('');

  return (
    <div>
      <form className='searchBar'onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(value);
          setValue('');
        }}>
        <div className='ui action input '>
          <input className='searchInput' type="text" value={value} placeholder="Add an item..."
            onChange={e=>setValue(e.target.value)}/>
          <button className="ui button">
              <i class="plus cart icon"></i>
            </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
