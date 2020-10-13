import React from 'react';
import { useState } from 'react'
import Form from './components/Form'
import TeamMembers from './components/TeamMembers'
import styled from 'styled-components'
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;

`;

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
    <AppContainer>
      <TeamMembers teamData={teamMembers} />
      <Form submit={submit} />
    </AppContainer>
  );
}

export default App;
