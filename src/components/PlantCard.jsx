
import React, { useState } from "react";

function PlantCard({ plants }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>

      {isSoldOut ? (
        <button onClick={() => setIsSoldOut(false)}>
          Out of Stock
        </button>
      ) : (
        <button
          className="primary"
          onClick={() => setIsSoldOut(true)}
        >
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
