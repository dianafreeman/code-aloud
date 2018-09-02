import React, {Component} from 'react';
import SelectUSState from 'react-select-us-states';
 
class StateSelect extends Component {
 
  constructor(props) {
    super(props);
    this.setLocationVal = this.setLocationVal.bind(this);
  }
 
  setLocationVal(newValue) {
    console.log('this is the State code: ' + newValue);
    this.setState({'currentLocation': newValue})

  }

  render() {
    return (
      <label>
        Select a state: <SelectUSState id="stateSelect" className="form-control" onChange={this.setLocationVal}/>
      </label>
    );
  }
}
 
export default StateSelect;