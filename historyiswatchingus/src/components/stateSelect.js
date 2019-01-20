import React from 'react';
import { dispatch } from 'redux';
import axios from 'axios'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { startLoading, stopLoading, hasError, receiveReps, requestReps, fetchReps } from '../js/actions.js';
import { SET_LOCATION, REQUEST_REPS, RECEIVE_REPS, IS_LOADING, HAS_ERROR } from '../js/actionTypes';
import store from '../js/store';


class StateSelect extends React.Component {
	constructor(props){
		super()

		this.handleStateSelection = (event) => {
		   	let StateCode = event.target.value;

			 let setLocation = { 
				  type: SET_LOCATION, 
				  payload: StateCode
				};

			store.dispatch(setLocation);
			store.dispatch(requestReps(StateCode));
		}
	}


	render(props){
		return (
		<FormGroup className="stateSelectGroup">
          <Label for="stateSelect" className="disp">Select a State</Label>
          <Input type="select" name="stateSelect" id="stateSelect" position="unset" onChange={this.handleStateSelection}>
   			   {/* state option format is [ abbrv, fullStateName ] */}
   			   <option>Select your State</option>
          	{this.props.options.map( (option, index) => <option key={index} value={option[0]}>{option[1]}</option>)}
          </Input>
        </FormGroup>
		)
	}
}

export default StateSelect
