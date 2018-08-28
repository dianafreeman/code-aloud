import React, { Component } from 'react';
import Rep from './components/person.jsx';
import Head from './components/header.jsx';
import Legislators from './components/legislators.jsx';
import './index.css';
import './assets/css/App.css';
import repstyle from './assets/css/rep-card.css';
import './assets/css/new-age.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootswatch-litera.min.css';

{/*import {initMap} from './assets/js/map-vanilla.js';*/}
{/* import SimpleMap from './assets/js/map.js'; */}

class App extends Component {
  render() {
    return (
      <div>
      <Head />
      <Legislators />
              
      
      </div>
    );
  }
}

export default App;




{/*class Download extends Component {
  render(){
    return (


      )


  }

}*/}