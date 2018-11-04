import React from 'react';
import states from 'datasets-us-states-abbr-names';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import StateSelect from './stateSelect';
import Causes from './Causes';

const stateOptions = Object.keys(states).map(function(key, element) {
    return [key, states[key]]
  });



//console.log(stateOptions);

 class UserForm extends React.Component {
  constructor(props){
    super()
    this.state = { hasError: false };

  }
  render(props) {
    return (
      <Form id="userForm">
        <Container>
          {this.props.children}
        </Container>
      </Form>
    );
  }
}

export default UserForm;

