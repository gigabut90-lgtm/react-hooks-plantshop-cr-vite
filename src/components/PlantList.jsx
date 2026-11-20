
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch plants");
        }
        return r.json();
      })
      .then((plants) => setPlants(plants))
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search onSearch={setSearchQuery} />

      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </>
  );
}

export default PlantList;
