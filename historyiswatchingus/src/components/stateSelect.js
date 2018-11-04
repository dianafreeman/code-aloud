import React from 'react';
import { dispatch } from 'redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getRepresentativesFor } from '../js/actions';
import { SET_LOCATION, GET_REPRESENTATIVES } from '../js/actionTypes';
import store from '../js/store';


const repAction = (reps) => {
		
}

class StateSelect extends React.Component {
	constructor(props){
		super()

		this.handleStateSelection = (event) => {
		   	let state_code = event.target.value;

			 let setLocation = { 
				  type: SET_LOCATION, 
				  payload: state_code
				  };

			store.dispatch(setLocation);
			let repsAction = getRepresentativesFor(state_code)
			console.log(`the rep action is ${repsAction}`)
			
			
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
