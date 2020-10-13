import React from 'react';

export default function Form(props) {  
    const { submit, onInputChange} = props;
   
    return (
        <>
        <h2>Add Team Member</h2>
        <form>
            <label>
                Name 
                <input id='name' name='name' type='text' onChange={onInputChange}></input>
            </label>
            <label>
                Role 
                <select id='role' name='role' onChange={onInputChange}>                    
                    <option value='Front End Engineer'>Please select a role</option>
                    <option value='Front End Engineer'>Front End Engineer</option>
                    <option value='Back End Engineeer'>Back End Engineer</option>
                    <option value='UX Designer'>UX Designer</option>
                    <option value='Coffee Maker'>Coffee Maker</option>
                </select>
            </label>
            <label>
                Email 
                <input id='email' name='email' type='text' onChange={onInputChange}></input>
            </label>
            <button onClick={submit}>Submit</button>
        </form>
        </>
    )
}