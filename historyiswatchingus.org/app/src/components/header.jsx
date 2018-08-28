import React, { Component } from 'react';
import StateSelect from './state-select';


class Head extends Component{
  render(){
    return (
  <header className="masthead">
      <div className="container h-50">
        <div className="row h-50">
          <div className="col-lg-10 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5 col-sm-12">History Is Watching Us</h1>
            <StateSelect />
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }

}

export default Head;