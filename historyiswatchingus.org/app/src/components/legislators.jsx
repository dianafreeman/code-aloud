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

  componentDidMount(){
    axios.get('https://www.opensecrets.org/api/?method=getLegislators&id=IL&apikey=d6baa8054d388ade4d57c9e24ef19ced')
     .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log('something went wrong'))
  
}

  render(){

  	return <Rep style={{repstyle}} /> 
  }

}
  
export default Legislators;
     {/*<Rep style={{repstyle}} /> */}
