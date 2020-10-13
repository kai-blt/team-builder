import React from 'react';
import { useState } from 'react'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: 'Kai',
    role: 'Front End Engineer',
    email: 'kai@kai.com'
  }]);


  return (
    <div className="App">
      <h1>Team Members</h1>
      <div>
        {teamMembers.map(member => {
          return (
          <div>
            <h2>{member.name}</h2>
            <div>{member.role}</div>
            <div>{member.email}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
