import React from 'react';
import { FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { CauseObject } from '../js/handleCauses';
import CauseItem from './CauseItem';

let allCauses = Object.values(CauseObject).map( (cause, index) => {
		return [cause]
	});

class Causes extends React.Component {
	constructor(){
	super()
	this.state = { hasError: false };

	}

	render(){
		return (
			<FormGroup className="causesGroup">
	          { Object.keys(CauseObject).map( key => {
	          	let cause = CauseObject[key];
	              return <CauseItem cause={cause} key={key}/> 

	          	}) }
	        </FormGroup>
		)
	}
}

export default Causes;
