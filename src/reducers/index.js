/* eslint-disable max-statements */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default-member */
import ACTIONS from '../actions';

const defaultState = {
	items: [],
	editingItem: {}
};

const todoReducer = (state = defaultState, action) => {
	switch (action.type) {
	case ACTIONS.Types.ADD_ITEM: {
		const id = state.items.length + 1;
		const todoItem = {
			value: action.payload.value,
			id,
			completed: false
		};

		return { ...state, items: [...state.items, todoItem] };
	}

	case ACTIONS.Types.DELETE_ITEM: {
		const items = state.items.filter(({ id }) => id !== action.payload.id);
		return { ...state, items };
	}

	case ACTIONS.Types.ITEM_COMPLETION: {
		const items = state.items.map((item) => {
			if (item.id === action.payload.modifiedItem.id) {
				const newItem = { ...item };
				newItem.completed = !newItem.completed;
				return newItem;
			}

			return item;
		});

		return { ...state, items };
	}

	default:
		return state;
	}
};

export default todoReducer;
