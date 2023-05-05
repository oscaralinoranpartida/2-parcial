function Salsas (props)
import React from 'react';

const producto = ({ Ingredientes,Picor,Sabor }) => {
  return (
    <div>
      <h1>{Ingredientes}</h1>
      <p>{Picor} </p>
      <p>{Sabor}</p>
    </div>
  );
};

export default Salsas;
