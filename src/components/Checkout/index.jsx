import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Checkout = ({ isCompleted }) => (
	<span>
		{
			isCompleted ?
				<FontAwesomeIcon icon={faCheckSquare} size="2x" /> :
				<FontAwesomeIcon icon={faSquare} size="2x" />
		}
	</span>
);

Checkout.propTypes = {
	isCompleted: PropTypes.bool.isRequired
};

export default Checkout;
