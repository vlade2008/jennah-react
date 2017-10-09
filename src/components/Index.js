import React, {PropTypes} from 'react';
import {Button,Tabs,Tab} from 'react-bootstrap'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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
        Jennah
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
