import React from 'react';
import PropTypes from 'prop-types';
import Hoc from './Hoc';

export const Hello = (props) => (
	
	 <h1 style={{color:'blue', fontStyle:'italic', textAlign:'center'}}>
	 	{props.name} Convertor 
	 </h1>
);
Hello.propTypes = {
	name: PropTypes.string		
}
Hello.defaultProps = {
	name: 'Welcome to'	
}

const Person = (props) => {
	console.log("Person props",props);
	return (<>
		<h4>Person Details </h4>
		<p>ID: {props.id}</p>
		<p>Name: {props.name}</p>
		<p>Age: {props.age}</p>
	</>);
};

export default Hoc({id:1})(Person); 
