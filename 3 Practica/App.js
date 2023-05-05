function Peliculas (props)
import React from 'react';

const producto = ({ Pelicula, Año, Director }) => {
  return (
    <div>
      <h1>{Pelicula}</h1>
      <p>{Año} </p>
      <p>{Director}</p>
    </div>
  );
};

export default Peliculas;
