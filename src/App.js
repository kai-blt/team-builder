import React from 'react';
import { useState } from 'react'
import Form from './components/Form'
import TeamMembers from './components/TeamMembers'
import './App.css';


function App() {
  //Team Member Data State 
  const [teamMembers, setTeamMembers] = useState([{
    name: 'Kai',
    role: 'Front End Engineer',
    email: 'kai@kai.com'
  }]);

  //Submit handler to push form values into teamMembers
  const submit = (formValues) => {
      setTeamMembers([...teamMembers, formValues]);
  } 

  return (
    <div className="App">
      <TeamMembers teamData={teamMembers} />
      <Form submit={submit} />
    </div>
  );
}

export default App;
