import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Progress } from 'reactstrap';
import { getIndustryContrib } from '../js/actions'

class RepCard extends React.Component {
  render(){
  return (
    <Col sm="6" md="4" lg="3">
     <Card>
       <CardBody className="elegant-color white-text rounded-bottom">
      <CardImage src={'https://theunitedstates.io/images/congress/450x550/'+this.props.rep[1]['@attributes']['bioguide_id']+'.jpg'} overlay="white-slight" alt="" className="rep"/>
    <CardTitle className="rep-name">{this.props.rep[1]['@attributes']['firstlast']}</CardTitle>
    <hr className="hr-light" />  

  
  <div className="text-center">Gun Rights Organizations</div>
      <Progress value="25" />
      {getIndustryContrib('Q13','N00035774')}

      <div className="text-center">Gun Control Organizations</div>
      <Progress value="25" />
      {getIndustryContrib('Q12','N00035774')}
  </CardBody>
      <a className="activator waves-effect waves-light mr-4"><FontAwesomeIcon icon={['fab', 'facebook']}/></a>

  <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
        <ul className="list-unstyled list-inline font-small">
            <li className="list-inline-item pr-2 white-text">First Elected in<FontAwesomeIcon icon="clock"/>{this.props.rep[1]['@attributes']['first_elected']}</li>
            <li className="list-inline-item pr-2"><a target="_blank" href={"https://facebook.com/"+this.props.rep[1]['@attributes']['facebook_id']} className="white-text"><FontAwesomeIcon icon={['fab', 'facebook']}/>12</a></li>
       <li className="list-inline-item pr-2"><a target="_blank" href="https://twitter.com/${this.props.rep[1]['@attributes']['twitter_id']}" className="white-text"><FontAwesomeIcon icon={['fab', 'twitter']}/>21</a></li>
       <li className="list-inline-item pr-2"><a target="_blank" href="${this.props.rep[1]['@attributes']['website']}" className="white-text"><FontAwesomeIcon icon="desktop"/>21</a></li>

        </ul>
    </div>
    
</Card>
</Col>
  );
};
}

export default RepCard;

/*
bioguide_id: "L000557"
birthdate: "1948-07-22"
cid: "N00000575"
comments: ""
congress_office: "1501 Longworth House Office Building"
exit_code: "0"
facebook_id: "RepJohnLarson"
fax: "202-225-1031"
feccandid: "H8CT01046"
first_elected: "1998"
firstlast: "John B Larson"
gender: "M"
lastname: "LARSON"
office: "CT01"
party: "D"
phone: "202-225-2265"
twitter_id: "RepJohnLarson"
votesmart_id: "17188"
webform: "https://forms.house.gov/larson/contact_new.html"
website: "https://larson.house.gov"
youtube_url: "https://youtube.com/RepJohnLarson"
*/