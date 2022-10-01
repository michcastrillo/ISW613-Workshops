import React, { useState } from "react";
import List from './List';
import './List.css';

const Personas = () => {
    const [persons, setPersons] = useState([
      {
        id: 1,
        name: "Kevin",
      },
      {
        id: 2,
        name: "Alex",
      },
      {
        id: 3,
        name: "Ben",
      },
      {
        id: 4,
        name: "Luis",
      },
      {
        id: 5,
        name: "Pedro",
      },
    ]);
  
    return (
      <div className="wrapper">
        <p>Lista 1</p>
        {persons.map((person) => {
          return (
            <List
              key={person.id}
              name={person.name}
            />
          );
        })}
      </div>
    );
  };
export default Personas; 