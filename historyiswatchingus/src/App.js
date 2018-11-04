import React from 'react';
import states from 'datasets-us-states-abbr-names';
import Header from './components/header'
import UserForm from './components/userForm'
import ErrorBoundary from './components/errorBoundary'
import StateSelect from './components/stateSelect';
import Legislators from './components/legislators'
import Causes from './components/Causes';
import store from './js/store';
import { Container, Row, Col, Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee, faUser, faMobile } from '@fortawesome/free-solid-svg-icons'

library.add( faCheck, faCoffee, faUser, faMobile)
store.subscribe( () => {
  console.log("Look, ma - a redux")
  console.log(store.getState())

})

const stateOptions = Object.keys(states).map(function(key, element) {
  return [key, states[key]]
});





class App extends React.Component {
  render() {
    return (
      <Container fluid>
          <Header >
              <Container>
                  <ErrorBoundary>
                      <UserForm >
                          <StateSelect options={stateOptions} store={store}/> 
                              <Row>
                                  <h3> Click the causes that you care about.</h3>
                                  <Causes />
                              </Row>
                          <Button>Submit</Button>
                      </UserForm>
                  </ErrorBoundary>
              </Container>
          </Header>  
      <Row className="main main-raised">
      <Legislators />
      </Row>
      </Container>


      );
  }
}

export default App;

