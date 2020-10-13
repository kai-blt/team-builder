import React from 'react';
import { useState } from 'react'



const defaultFormValues = {
    name: '',
    role: '',
    email: ''
}

export default function Form(props) {  
    const { submit } = props;
    const [formValues, setFormValues] = useState(defaultFormValues)
   
    //Form Handling Functions
    const onInputChange = evt => {
        setFormValues({
        ...formValues,
        [evt.target.name]: evt.target.value
        })
    }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit(formValues);
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