import React from "react";
import './List.css';

const List= (props) => {
  return (
   
    <ul>
        <li>{props.name}</li>
    </ul>
   
  );
};

export default List;