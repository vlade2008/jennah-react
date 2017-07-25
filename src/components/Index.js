import React, {PropTypes} from 'react';
import {Button,Tabs,Tab} from 'react-bootstrap'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Hotel from './Hotel/Index';
import CountVowels from './CountVowels/Index';
import FizzBuzz from './FizzBuzz/Index';
import CinemaApp from './CinemaApp/Index';
import ReverseString from './ReverseString';
import Palindrome from './Palindrome/Index'

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
      <div className="UserGrid">
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">

        <Tab eventKey={1} title="Hotel Reservation System "><Hotel /></Tab>

        <Tab eventKey={2} title="Fizz Buzz"> <FizzBuzz /> </Tab>

        <Tab eventKey={3} title="Reverse a String" > <ReverseString /> </Tab>

        <Tab eventKey={4} title="Count Vowels"> <CountVowels /></Tab>

        <Tab eventKey={5} title="Check if Palindrome"> <Palindrome /></Tab>

        <Tab eventKey={6} title="Cinema App"> <CinemaApp /> </Tab>

      </Tabs>
      </div>
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
