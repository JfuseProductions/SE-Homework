import React,{useState} from 'react';

const ListItem = (props) => {

  return <li ><span>{props.name}</span> <i onClick={()=>props.handleClick(props.name)}className='listIcon trash icon'></i></li>
}

export default ListItem;
