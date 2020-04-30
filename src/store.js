import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState) {
	const middlewares = [logger];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(
		rootReducer,
		initialState,
		process.env.NODE_ENV === 'production' ? enhancers : composedEnhancers
	);
	return store;
}