import React, { Component } from 'react';
import Rep from './person.jsx';
import axios from 'axios';
import repstyle from '../assets/css/rep-card.css';


class Legislators extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      legislators: null,
    };
		
	}

 
  render(){

  	return <Rep style={{repstyle}} /> 
  }

}
  
export default Legislators;
     {/*<Rep style={{repstyle}} /> */}
