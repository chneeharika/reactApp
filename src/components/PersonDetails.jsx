import React from 'react';

const PersonDetails = props => (
	<p>First Person {props.user.map(user=><span style={{fontWeight:'bold',color:'green'}}>{user.name}</span>)}</p>
);
export default PersonDetails;
