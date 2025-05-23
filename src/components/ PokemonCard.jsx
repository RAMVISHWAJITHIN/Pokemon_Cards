import React from "react";


const PokemonCard = ({ name, image }) => (
  <div className="pokemon-card">
    <img src={image} alt={name} />
    <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
  </div>
);

export default PokemonCard;
