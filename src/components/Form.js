import React from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'


//Styled components
const FormContainer = styled.form`
    padding: 2%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    label {
        font-weight: 700;
        margin: 4%;
    }
    select {
        margin: 2%;
    }

    button {
        margin: 4%;
        font-size: 1.25rem;
        padding: 2%;
    }
`;

const defaultFormValues = {
    name: '',
    role: '',
    email: ''
}

export default function Form(props) {  
    //function to update main app with entered form values passed through props
    const { submit, memberToEdit, editMember } = props;
    //Initialize form values so form is a state controlled form
    const [formValues, setFormValues] = useState(defaultFormValues)


    //Only populate the fields on the form if there's a membert to update
    useEffect(() => {
       setFormValues(memberToEdit);
    }, [memberToEdit])

   
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

        //If there's a member to edit, change records else add
        if (memberToEdit.id !== '') {
            editMember(formValues)
        } else {
            //Final cleanup to remove whitespace
            const newTeamMember = {
                id: uuid(),
                name: formValues.name.trim(),
                role: formValues.role,
                email: formValues.email.trim()
            }
            submit(newTeamMember);
        }        
    }

    return (
        <>
        <FormContainer onSubmit={onSubmit}>            
            <h2>{(memberToEdit.id === '') ? 'Add Team Member' : 'Edit Team Member'}</h2>
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
        </FormContainer>
        </>
    )
}