import React, { useState } from "react";
import List from './List';
import './List.css';

const Universidades = () => {
    const [universidades, setUniversidades] = useState([
      {
        id: 1,
        name: "UTN",
      },
      {
        id: 2,
        name: "UNA",
      },
      {
        id: 3,
        name: "UCR",
      },
      {
        id: 4,
        name: "UNED",
      },
      {
        id: 5,
        name: "TEC",
      },
    ]);
  
    return (
      <div className="wrapper">
        <p>Lista 2</p>
        {universidades.map((uni) => {
          return (
            <List
              key={uni.id}
              name={uni.name}
            />
          );
        })}
      </div>
    );
  };
export default Universidades; 