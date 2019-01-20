import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dispatch } from 'redux';
import store from '../js/store';
import { setCauses } from '../js/actions';


class CauseItem extends React.Component {
	constructor(props){
	super(props)
	this.state = { 
		isSelected: false
	};


	this.handleCheckboxChange = (event) => {
		store.dispatch(setCauses(this.props.cause));
		this.props.cause.sectors.map( (sector) => {
			console.log(sector.code)
		});


	}
}


	render(){
		return (
          <Label check size="md" for={this.props.cause.permalinkName}><span>{this.props.cause.causeName}</span>
            <Input id={this.props.cause.permalinkName} type="checkbox" className="badgebox" name={this.props.cause.permalinkName} onChange={this.handleCheckboxChange}/>
            <span className="checkBadge"><FontAwesomeIcon icon="check" /></span>
          </Label>
		)
	}
}

export default CauseItem;
