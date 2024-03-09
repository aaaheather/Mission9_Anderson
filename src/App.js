// App.js
import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import TeamList from './TeamList';
import './App.css'; // Import your styling if needed

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('./teams.json') // Update the path based on your file name
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <TeamList teams={teams} />
      </header>
    </div>
  );
};

export default App;
