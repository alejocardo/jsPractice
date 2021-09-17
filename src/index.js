//Create a react app from scrat
import React from "react";
import ReactDOM from "react-dom";
const name = "Alejandro";
let Year = new Date().getFullYear();

const valor = 73;
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <p>Creado por {name} </p>
    <p>Derechos Reservados {Year}</p>
  </div>,
  document.getElementById("root")
);

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
