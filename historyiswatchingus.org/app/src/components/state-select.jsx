
import React, {Component} from 'react';
import SelectUSState from 'react-select-us-states';
 
class StateSelect extends Component {
 
  constructor(props) {
    super(props);
    this.setNewValue = this.setNewValue.bind(this);
  }
 
  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }
 
  render() {
    return (
      <label>
        Select a state: <SelectUSState id="myId" className="form-control" onChange={this.setNewValue}/>
      </label>
    );
  }
}
 
export default StateSelect;