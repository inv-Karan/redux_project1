import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const initialState = {};

const middleware = [thunk];

const yourStore = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default yourStore;