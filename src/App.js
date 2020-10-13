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

  //Form Data State
  const [formData, setFormData] = useState([{
    name: '',
    role: '',
    email: ''
  }]);


  //Form Handling Functions
  const onInputChange = evt => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const submit = (evt) => {
      evt.preventDefault();
      setTeamMembers([...teamMembers, formData]);
  } 

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
      <Form submit={submit} onInputChange={onInputChange}/>
    </div>
  );
}

export default App;
