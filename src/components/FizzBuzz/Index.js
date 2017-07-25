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

    this.state={value:0}
  }

  handleChange = (e)=> {
   this.setState({ value: e.target.value });
 }


  render() {

    let numberArray = [];
    for(var value = 1; value <= this.state.value; value++) {
      numberArray.push(value)
    }

  let displayMultiple =   numberArray.map((item,i)=>{
      let value;

      if( item % 3 && item % 5) {
        value = item;
      }else {
       if (item % 5 == 0 && item % 3 == 0) {
           value = 'BuzzFizz';
       }else {
         if( item % 3 == 0 ) {
           value = 'buzz';
        }
        if( item % 5 == 0 ) {
            value = 'Fizz';
        }
       }
      }

      return(
        <div key={i}>{value}</div>
      )
    });

    return (
      <Well style={{marginTop:20}}>
          <Row>
            <Col md={6}>
              <FormGroup>
                  <ControlLabel>Enter Value</ControlLabel>
                  <FormControl
                    type="numbers"
                    value={this.state.value || ''}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
            </Col>
            <Col md={6}>
              <h1>Display Result</h1>
              {_.isEmpty(this.state.value) ? '' : displayMultiple}
            </Col>
          </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        countActions: bindActionCreators(countActions, dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
