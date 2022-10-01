import React, { useState } from "react";
import List from './List';
import './List.css';
const Cursos = () => {
    const [cursos, setCursos] = useState([
      {
        id: 1,
        name: "Conta",
      },
      {
        id: 2,
        name: "Software",
      },
      {
        id: 3,
        name: "Biologia",
      },
      {
        id: 4,
        name: "Quimica",
      },
      {
        id: 5,
        name: "Mate",
      },
    ]);
  
    return (
      <div className="wrapper">
        <p>Lista 3</p>
        {cursos.map((curso) => {
          return (
            <List
              key={curso.id}
              name={curso.name}
            />
          );
        })}
      </div>
    );
  };
export default Cursos; 