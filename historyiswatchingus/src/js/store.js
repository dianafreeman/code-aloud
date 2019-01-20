import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware }  from 'redux';
import { createLogger }  from 'redux-logger';
import { allReducers }  from './reducers';
import { setLocation } from './actions';

const loggerMiddleware = createLogger()
//const store = createStore(allReducers, applyMiddleware( thunkMiddleware, loggerMiddleware ));
const store = createStore(allReducers, applyMiddleware( thunkMiddleware ));

console.log(store.getState())
export default store;

