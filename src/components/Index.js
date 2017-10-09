import React from 'react';

import {Button,Tabs,Tab,Grid,Row,Col} from 'react-bootstrap'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Branch from './Branch/Index';
import Discount from './Discount/Index';
import Inventory from './Inventory/Index';
import Users from './Users/Index';


require('react-progress-2/main.css');

 class Index extends React.Component{

  constructor(props){
      super(props);

      this.state ={
        key:1
      }

    }

  handleSelect = (key) =>{
    this.setState({key:key})
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">

              <Tab eventKey={1} title="Branch">{this.state.key == 1 ? (<Branch />) : null}</Tab>

              <Tab eventKey={2} title="Discount"> {this.state.key == 2 ? (<Discount />) : null} </Tab>

              <Tab eventKey={3} title="Invtentory" >{this.state.key == 3? (<Inventory />) : null}  </Tab>

              <Tab eventKey={4} title="Users">{this.state.key == 4 ? ( <Users />) : null}</Tab>

            </Tabs>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        routerActions: bindActionCreators(routerActions, dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
