import React from 'react';
import PropTypes from 'prop-types';

export const PropChecking = (props) => (
	
	 <>
	 	<h2>Checking number of children </h2>
	 	{props.children}
	 </>
);
PropChecking.propTypes = {
children: PropTypes.arrayOf(PropTypes.element).isRequired
	
}
