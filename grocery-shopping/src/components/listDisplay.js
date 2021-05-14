import React,{useState} from 'react';
import ListItem from './listItem';

const DisplayList = (props) => {

  const items = props.items.map((item,i) => (
    <ListItem
      key={i}
      name={item}
      handleClick = {props.handleClick}
      />
    ))
    return (
      <ul class='list-container'><li>{items}</li></ul>
    )
}
export default DisplayList;
