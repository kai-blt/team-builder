import React from 'react'
import styled from 'styled-components'

const TeamMemberCard = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    width: 40%;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #444;
    box-shadow: 2px 2px 20px #333;
    color: #fff;
    font-size: 1.5rem;
`;

export default function TeamMembers(props) {
    const { teamData, editMember } = props;

    return (
        <>       
        <TeamMemberCard>            
        <h1>Team Members</h1>
        {teamData.map((member, index) => {

            return (
            <div key={index}>
                <h2>{member.name}</h2>
                <div>{member.role}</div>
                <div>{member.email}</div>
                <button onClick={() => editMember(member)}>Edit</button>
            </div>
            )
        })}
        </TeamMemberCard>
        </>
    )
}
