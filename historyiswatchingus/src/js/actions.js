import path from 'path';
import axios from 'axios'; 
import { REQUEST_REPS, RECEIVE_REPS, SET_LOCATION } from './actionTypes';

/*

Actions!

*/

const initialState = {
  hasError: false,
  location: null,
  reps: []
};


 export const getRepresentativesFor = (STATE_CODE) => {
	let url = 'https://dianasteakleyfreeman.com/historyiswatchingus/data/legislators/'+ STATE_CODE + '.json';
  let config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };
	axios.get(url, config)
    .then( (response) => {
    	console.log(response.data.response)
   		return repAction(response.data.response);

	})
  /*  .then( (legislators) => {
    	createRepCards(legislators)
    })*/
    .catch(err => console.log(err));
    
};
// todo: use location reducer
