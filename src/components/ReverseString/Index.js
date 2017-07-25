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


  render() {

    let newArray = [];
    let valueReverse;

    newArray = this.state.value.split("").reverse();
    valueReverse = newArray.join("")

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
              <h1>Reverse String <b style={{color:'red'}}>{valueReverse}</b></h1>
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
