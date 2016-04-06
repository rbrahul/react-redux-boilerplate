import { createStore, applyMiddleware, compose } from 'redux';
import connectApp from '../reducers/appReducers';

let initialState={
	number: 0
};

export default createStore(
    connectApp,
    initialState
)