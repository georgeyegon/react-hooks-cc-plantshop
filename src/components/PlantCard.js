import React from 'react';

function PlantCard({ plant }) {
  return (
    <div>
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>Price: ${plant.price}</p>
    </div>
  );
}

export default PlantCard;
