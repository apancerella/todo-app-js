import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddItem } from '../../actions';


const Form = () => {
	const dispatch = useDispatch();
	const [itemValue, setItemValue] = useState('');

	const handleSubmitAndResetForm = (ev) => {
		ev.preventDefault();
		dispatch(AddItem(itemValue));

		// Reset value
		setItemValue('');
	};

	return (
		<div>
			<form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
				<div className="form-row">
					<div className="col">
						<input
							type="text"
							className="form-control"
							name="new-todo-item"
							placeholder="I want to do..."
							value={itemValue}
							onChange={(ev) => setItemValue(ev.target.value)}
						/>
					</div>

					<div className="col-auto">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={!itemValue}
						>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
