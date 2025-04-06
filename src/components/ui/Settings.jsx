import React, { useState } from 'react';
import { Sun, Moon, Settings as GearIcon } from 'lucide-react';
import { MEASUREMENT_SYSTEMS } from '../../constants';
import '../../styles/components/Header.css';

function Settings({ measurementSystem, setMeasurementSystem }) {
  const [openSettings, setOpenSettings] = useState(false);
  const [dark, setDark] = useState(false); // Local state for theme toggling

  // Handle theme toggle
  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    // Save theme to local storage or similar storage method if desired
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  };

  // Change measurement system
  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false); // Close settings after selection
  };

  return (
    <div className="Settings">
      {/* Theme Toggle */}
      <div className="theme-toggler" onClick={toggleTheme}>
        {dark ? <Moon size={24} /> : <Sun size={24} />}
      </div>

      {/* Settings Button */}
      <div
        className="settings-btn"
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <GearIcon size={28} />
      </div>

      {/* Settings Menu */}
      {openSettings && (
        <div className="settings-menu">
          <h4>Measurement Systems:</h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <button
                key={system}
                className={`system-btn ${system === measurementSystem ? 'active' : ''}`}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
