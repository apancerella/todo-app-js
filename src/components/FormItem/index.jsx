import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

import Checkout from '../Checkout';
import PropertyBar from '../PropertyBar';

import { ItemCompletion } from '../../actions';

const FormItem = ({ item }) => {
	const dispatch = useDispatch();

	let liClass = 'form_item__component list-group-item form-control';
	liClass = item.completed ? `${liClass} form_item__component-completed` : liClass;

	return (
		<li className={liClass}>
			<div onClick={() => dispatch(ItemCompletion(item))} >
				<div className="form_item__checkout d-inline-block">
					<Checkout isCompleted={item.completed} />
				</div>
				<span className="form_item__text">{item.value}</span>
			</div>
			<PropertyBar id={item.id} />
		</li>
	);
};

FormItem.propTypes = {
	item: PropTypes.shape({
		value: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired
};

export default FormItem;
