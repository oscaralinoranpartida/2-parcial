function Domos (props)
import React from 'react';

const producto = ({ Tamaño,Color}) => {
  return (
    <div>
      <h1>{Tamaño}</h1>
      <p>{Color} </p>
    </div>
  );
};

export default Domos;
