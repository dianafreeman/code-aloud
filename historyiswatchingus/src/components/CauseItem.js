import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CauseItem extends React.Component {
	constructor(props){
	super(props)
	this.state = { 
		isSelected: false
	};


	this.handleCheckboxChange = (event) => {
		console.log('selected!')
		this.setState({'isSelected': true})
	}

	}


	render(props){
		return (
          <Label check size="md" for={this.props.permalinkName}><span>{this.props.causeName}</span>
            <Input id={this.props.permalinkName} type="checkbox" className="badgebox" name={this.props.permalinkName} onChange={this.handleCheckboxChange}/>
            <span className="checkBadge"><FontAwesomeIcon icon="check" /></span>
          </Label>
		)
	}
}

export default CauseItem;
