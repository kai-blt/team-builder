import React from 'react';
import { useState } from 'react'



const defaultFormValues = {
    name: '',
    role: '',
    email: ''
}

export default function Form(props) {  
    //function to update main app with entered form values passed through props
    const { submit } = props;
    //Initialize form values so form is a state controlled form
    const [formValues, setFormValues] = useState(defaultFormValues)
   
    //Form Handling Functions
    const onInputChange = evt => {
        setFormValues({
        ...formValues,
        [evt.target.name]: evt.target.value
        })
    }
    
    const onSubmit = evt => {
        //Stop from from utilizing default behaviour causing reload
        evt.preventDefault();
        
        //Handle missing fields and alert user
        if (!formValues.name || !formValues.role || !formValues.email) {
            alert('Please fill out all fields')
            return
        }

        //Final cleanup to remove whitespace
        const newTeamMember = {
            name: formValues.name.trim(),
            role: formValues.role,
            email: formValues.email.trim()
        }

        submit(newTeamMember);
    }

    return (
        <>
        <h2>Add Team Member</h2>
        <form onSubmit={onSubmit}>
            <label>Name 
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={onInputChange}
                ></input>
            </label>
            <label>Role 
                <select id='role' name='role' value={formValues.role} onChange={onInputChange}>                    
                    <option value=''>Please select a role</option>
                    <option value='Front End Engineer'>Front End Engineer</option>
                    <option value='Back End Engineeer'>Back End Engineer</option>
                    <option value='UX Designer'>UX Designer</option>
                    <option value='Coffee Maker'>Coffee Maker</option>
                </select>
            </label>
            <label>Email 
                <input
                    id='email'
                    name='email'
                    type='email'
                    value={formValues.email}
                    onChange={onInputChange}
                ></input>
            </label>
            <button>Submit</button>
        </form>
        </>
    )
}