import React from 'react'

export default function TeamMembers(props) {
    const { teamData } = props;

    return (
        <>
        <h1>Team Members</h1>
        <div>
        {teamData.map(member => {
            return (
            <div>
            <h2>{member.name}</h2>
            <div>{member.role}</div>
            <div>{member.email}</div>
            </div>
            )
        })}
        </div>
        </>
    )
}
