import React from 'react';
import states from 'datasets-us-states-abbr-names';
import Header from './components/header'
import UserForm from './components/userForm'
import ErrorBoundary from './components/errorBoundary'
import StateSelect from './components/stateSelect';
import Legislators from './components/legislators'
import Causes from './components/Causes';
import store from './js/store';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShareAlt, faUser, faMobile, faDesktop, faClockO } from '@fortawesome/free-solid-svg-icons'
import { getIndustryContrib } from './js/actions'



library.add( fab, faCheck, faUser, faUser, faMobile, faDesktop )

  store.subscribe( () => {
  console.log("Look, ma - a redux")
  console.log(store.getState())

})

const stateOptions = Object.keys(states).map(function(key, element) {
  return [key, states[key]]
});


getIndustryContrib('N00035774', 'Q13')


class App extends React.Component {
  render() {
    return (
      <Container fluid>
          <Header />
              <ErrorBoundary>
                <Form id="userForm">
                   <Container>
                     <StateSelect options={stateOptions} store={store}/> 
                      <h3> Click the causes that you care about.</h3>
                       <Causes />
                    </Container>
                 </Form>     
                 
          <Row className="main main-raised">
          <section id="legislators">
      <Legislators />
              </section>
            </Row>            
      </ErrorBoundary>
      </Container>

      );
  }
}

export default App;

