// Action Types
const ADD_ITEM = 'Add item';
const CANCEL_EDIT_ITEM = 'Cancel edit item';
const DELETE_ITEM = 'Delete item';
const EDIT_ITEM = 'Edit item';
const ITEM_COMPLETION = 'Item completion status update';
const REORDER_ITEM = 'Reorder item';
const SELECT_EDIT_ITEM = 'Select edit item';

export const Types = {
	ADD_ITEM,
	CANCEL_EDIT_ITEM,
	DELETE_ITEM,
	EDIT_ITEM,
	ITEM_COMPLETION,
	REORDER_ITEM,
	SELECT_EDIT_ITEM
};

// Action creators
export const AddItem = (itemValue) => ({
	type: ADD_ITEM,
	payload: { value: itemValue }
});

export const DeleteItem = (selectedItemId) => ({
	type: DELETE_ITEM,
	payload: { id: selectedItemId }
});

export const ItemCompletion = (modifiedItem) => ({
	type: ITEM_COMPLETION,
	payload: { modifiedItem }
});

export default {
	Types,
	AddItem,
	DeleteItem,
	ItemCompletion
};
