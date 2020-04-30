import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './style.css';

import { DeleteItem } from '../../actions';

const PropertyBar = ({ id }) => {
	const dispatch = useDispatch();
	return (
		<div className="property_bar__component">
			<button
				type="button"
				className="btn btn-danger property_bar__button"
				onClick={() => dispatch(DeleteItem(id))}
			>
				<FontAwesomeIcon icon={faTrash} size="sm" />
			</button>
		</div>
	);
};

PropertyBar.propTypes = {
	id: PropTypes.number.isRequired
};

export default PropertyBar;
