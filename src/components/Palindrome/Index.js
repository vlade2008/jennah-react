import React, {PropTypes} from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FormControl,Well} from 'react-bootstrap'
import _ from 'lodash'


import * as countActions from '../../actions/countActions';
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Index extends React.Component {
  constructor(props){
    super(props)

    this.state={value:''}
  }

  handleChange = (e)=> {
   this.setState({ value: e.target.value });
 }
  // function palindrome(myString){
  //
  //   /* remove special characters, spaces and make lowercase*/
  //   var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  //
  //   /* reverse removeChar for comparison*/
  //   var checkPalindrome = removeChar.split('').reverse().join('');
  //
  //   /* Check to see if myString is a Palindrome*/
  //   if(removeChar === checkPalindrome){
  //
  //     document.write("<div>"+ myString + " is a Palindrome <div>");
  //   }else{
  //
  //     document.write("<div>" + myString + " is not a Palindrome </div>");
  //   }
  //   }
  //   palindrome('"Oh who was it I saw, oh who?"')
  //   palindrome('"Madam"')
  //   palindrome('"Star Wars"')
  //   palindrome('"2,3,4,3,2"')
  //   palindrome('"7,10,7,8,9"')

  render() {

      let statusCheck;
      let value = this.state.value;


      var removeChar = value.replace(/[^A-Z0-9]/ig, "").toLowerCase();
      var checkPalindrome = value.split('').reverse().join('');


      if (_.includes(removeChar,checkPalindrome)) {
        statusCheck = 'TRUE'
      }else {
        statusCheck = 'FALSE'
      }



    return (
      <Well style={{marginTop:20}}>
          <Row>
            <Col md={6}>
              <FormGroup>
                  <ControlLabel>Enter Value</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value || ''}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
            </Col>
            <Col md={6}>
              <h1>Check if  Palindrome <b style={{color:'red'}}>{!_.isEmpty(this.state.value)? statusCheck : '' }</b></h1>
            </Col>
          </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
