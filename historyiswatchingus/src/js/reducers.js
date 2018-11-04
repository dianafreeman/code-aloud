import { REQUEST_REPS, RECEIVE_REPS, SET_LOCATION } from './actionTypes';
import { setLocation } from './actions';
import { combineReducers }  from 'redux';


export const repReducer = (state = [], { type, payload }) => {
  switch (type) {
    case REQUEST_REPS:
      return payload;
  }
  return state //.location.concat(action.payload)
};

 const locationReducer = (state = '', { type, payload }) => {  
  switch (type) {
    case SET_LOCATION:
      return payload;
  }
  return state //.location.concat(action.payload)
 // }
};


export const allReducers = combineReducers({
  location: locationReducer,
  reps: repReducer
})

