import path from 'path';
import axios from 'axios'; 
import { REQUEST_REPS, RECEIVE_REPS, SET_LOCATION, IS_LOADING, HAS_ERROR, SET_CAUSES } from './actionTypes';
import store from './store'; 

/*

Actions!

*/

export const hasError = {
    type: HAS_ERROR,
    payload: true
}

export const startLoading = {
    type: IS_LOADING,
    payload: true
  }

export const stopLoading = {
    type: IS_LOADING,
    payload: false
  }



/*
* Action Creators
*/ 
export const requestReps = (StateCode) => {
	console.log('request sent!');
	store.dispatch(startLoading);
    fetchReps(StateCode);
  return {
    type: REQUEST_REPS,
    payload: StateCode
  }
}

export const receiveReps = (reps) => {
  console.log('response received!');

return {
 		   type: RECEIVE_REPS,
 		   payload: reps
  };
}

export const setCauses = (cause) => {
	return {
		type: SET_CAUSES,
		payload: cause

	}
}

export const fetchReps = (StateCode) => {
  let url;
  if (process.env.NODE_ENV == 'development'){
  url = 'https://dianasteakleyfreeman.com/historyiswatchingus/data/legislators/'+ StateCode + '.json';
  } else {
  url = 'data/legislators/'+ StateCode + '.json';

  };
  let config = {
      method: 'HEAD',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET',
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
  };
  axios.get(url, config)
    .then( (response) => {
    	let reps = response.data.response;
    	//console.log(reps)
      	store.dispatch(receiveReps(reps))
  }).then( () => store.dispatch(stopLoading))
    .catch(err => store.dispatch(hasError));
    
};

export const getIndustryContrib = (CID, IndustryCode) => {
	let url = `http://www.opensecrets.org/api/?method=candIndByInd&cid=${CID}&cycle=2018&ind=${IndustryCode}&apikey=88d1aa9112f23c0bdf6a3fddaef2ccdf&output=json&callback=?`;
     let config = {
      method: 'HEAD',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET',
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
  };
 axios.get(url, config)
    .then( (response) => {
    	let contribs = response.data.response;
    	console.log(contribs)
     // store.dispatch(handleIndustryContrib(reps))
  }).then( () => store.dispatch(stopLoading))
    .catch(err => store.dispatch(hasError));
    
};
