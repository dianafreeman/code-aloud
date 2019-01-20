import { REQUEST_REPS, RECEIVE_REPS, SET_LOCATION, IS_LOADING, HAS_ERROR, SET_CAUSES } from './actionTypes';
import { combineReducers }  from 'redux';
import { CauseObject } from './handleCauses';


const getIndustryContrib = (CID, IndustryCode) => {
  let url = `https://www.opensecrets.org/api/?method=candIndByInd&cid=${CID}&cycle=2018&ind=${IndustryCode}&apikey=88d1aa9112f23c0bdf6a3fddaef2ccdf`;
     let config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };
  axios.get(url, config)
    .then( (response) => {
      let contribs = response.data.response;
      console.log(reps)
        //store.dispatch(handleIndustryContrib(reps))
  }).then( () => store.dispatch(stopLoading))
    .catch(err => store.dispatch(hasError));
    
};


export const repReducer = (state = [], { type, payload }) => {
  switch (type) {
    case RECEIVE_REPS:
      let reps = [];
      let origReps = payload.legislator;
      origReps.map( (rep) => {
        // TO DO

      });
      return origReps;
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

const loadingReducer = (state = false, { type, payload }) => {  
  switch (type) {
    case IS_LOADING:
      return payload;
  }
  return state //.location.concat(action.payload)
 // }
};

const causeReducer = (state = [], { type, payload }) => {  
  switch (type) {
    case SET_CAUSES:
    let index = state.indexOf(payload);
    if (index == -1) {
      return state.concat(payload);
    } else {
      return state.splice(state, index)
    }
  }
  return state //.location.concat(action.payload)
 // }
};


const errorReducer = (state = false, { type, payload }) => {  
  switch (type) {
    case HAS_ERROR:
      return payload;
  }
  return state //.location.concat(action.payload)
 // }
};


export const allReducers = combineReducers({
  location: locationReducer,
  reps: repReducer,
  isLoading: loadingReducer,
  causes: causeReducer,
  hasError: errorReducer
})

