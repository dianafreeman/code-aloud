import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RepCard } from './repCard';


class Legislators extends React.Component {
	constructor(props){
	super()
	this.state = { hasError: false };
	}

	render(props){
	  return (
	  		<section id="legislators" className="section" >

	  		<h2 className="preLoad">Your Legislators will appear here</h2>
	  		

            </section>

	  		)


	}
}


export default Legislators;