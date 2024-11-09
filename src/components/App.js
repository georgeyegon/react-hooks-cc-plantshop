import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/plants') // Replace with your API URL if needed
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div>
      <h1>Plant List</h1>
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
