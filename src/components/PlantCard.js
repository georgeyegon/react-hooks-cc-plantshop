// PlantCard.js
import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((prevStock) => !prevStock);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className={isInStock ? "primary" : ""} onClick={handleToggleStock}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
