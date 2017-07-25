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

    this.state={value:'',vowels:0}
  }

  handleChange = (e)=> {
   this.setState({ value: e.target.value },()=>{
     this.props.countActions.updateCount(this.vowels(this.state.value));

   });
 }

vowels =(string)=>{
  return _.filter(string, (v)=>{
    return /[aeiou]/i.test(v);
  })
}

  render() {



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
              <h1>Vowel found <b style={{color:'red'}}>{this.props.count.count.length}</b></h1>
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
