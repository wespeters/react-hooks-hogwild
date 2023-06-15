import React, { useState } from 'react';
import Nav from './Nav';
import HogCard from './HogCard';
import hogs from '../porkers_data';
import HogForm from './HogForm';
import { Card } from 'semantic-ui-react';

function App() {
  const [hogsData, setHogsData] = useState(hogs);
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name"); // or "weight"
  const [showForm, setShowForm] = useState(false); // new state variable for form visibility

  const handleToggleGreased = () => {
    setIsGreased(!isGreased);
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleAddHog = (hog) => {
    setHogsData([hog, ...hogsData]);
  };

  const handleShowForm = () => { // new function to handle form visibility
    setShowForm(!showForm);
  };

  const filteredHogs = isGreased
    ? hogsData.filter((hog) => hog.greased)
    : hogsData;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  });

  return (
    <div className='App'>
      <Nav onToggleGreased={handleToggleGreased} onSortBy={handleSortBy} onShowForm={handleShowForm} />
      {showForm && <HogForm onAddHog={handleAddHog} />}
      <Card.Group itemsPerRow={4}>
        {sortedHogs.map((hog) => (
          <HogCard key={hog.name} hog={hog} />
        ))}
      </Card.Group>
    </div>
  );
}

export default App;
