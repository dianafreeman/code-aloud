import React from 'react'
import UserForm from './userForm'
import { Container } from 'reactstrap';
import ErrorBoundary from './errorBoundary'

class Header extends React.Component {
	constructor(props){
		super()
		this.state = { hasError: false };

	}

	render(props){
	let mainDesc = [ "History is Watching Us"];
	let subDesc = ["Your vote is your voice. Speak Responsibly."];

	return (
		<ErrorBoundary>
		<header id="masthead">
		<div className="brand text-center">
	            <h1 className="align-middle">{mainDesc}</h1>
	            <h3 className="align-middle">{subDesc}</h3>
	      
	            {this.props.children}
	    </div>
	    </header>
	    </ErrorBoundary>
	    )
}
	}


export default Header;