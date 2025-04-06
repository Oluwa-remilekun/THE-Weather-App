import React, { useState } from 'react';
import Search from './ui/Search';
import Settings from './ui/Settings';
import '../styles/components/Header.css';

function Header() {
  const [location, setLocation] = useState("");
  const [measurementSystem, setMeasurementSystem] = useState("auto");

  const handleSearchChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <header className="Header">
      <h1 className="app-name">THE Weather App</h1>
      <div className="search-container">
        <Search value={location} onChange={handleSearchChange} />
      </div>
      <div className="settings-container">
        <Settings
          measurementSystem={measurementSystem}
          setMeasurementSystem={setMeasurementSystem}
        />
      </div>
    </header>
  );
}

export default Header;
