import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { productsReducer } from '../reducers/productsReducer';

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	products: productsReducer,
});

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));