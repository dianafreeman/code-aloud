import React from 'react';
import { Container, Row, Col, CardGroup } from 'mdbreact';
import RepCard from './repCard';
import store from '../js/store';
import { connect } from "react-redux";
import RepModal from './repModal';


class Legislators extends React.Component {
	constructor(){
		super()
	};

	render(){
		if (!this.props.reps){
		return (
	  	    <Row className="main main-raised">
		  		<section id="legislators">
		  			<h3>Select a state above. Your representative will appear here </h3>
	            </section>

<RepModal />
            </Row>

	  		)

		} else {
			return(
			 <Row className="main main-raised">
				<section id="legislators">
				<CardGroup deck>
					{ Object.entries(this.props.reps).map((rep, key) => {
		      return (
				<RepCard rep={rep} key={key} />
		      )})}
					</CardGroup>
				 </section>
				   </Row>
			            )

		}
  
	}
}

function mapStateToProps(state){
/*	console.log('map props to state called!')
    console.log(`the object called 'reps' is a ${typeof(state.reps.legislator)}`)
*/
    return {
        reps: state.reps
    }
}

export default connect(mapStateToProps)(Legislators);