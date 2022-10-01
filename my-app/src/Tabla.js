import React from "react";
import products from "./products";
import './Tabla.css';

export default function Tabla() {
    return (
        <div>
            <table>
                <caption>Tabla</caption>
                <thead>
                <tr>
                    <th> ID </th>
                    <th> Nombre</th>    
                    <th> Precio </th> 
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
  }