import React, {PropTypes} from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FormControl,Well,Button} from 'react-bootstrap'
import _ from 'lodash'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import axios from 'axios';

import * as movieActions from '../../actions/movieActions';


class Index extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    axios.get('https://myproject-d1513.firebaseio.com/restapi')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleClick = (key) =>{
    return()=>{
      let payload = this.props.movie.data.movieList[key];
      if (payload.status) {
        _.merge(payload,{status:false})
      }else {
        _.merge(payload,{status:true})
      }
       this.props.movieActions.updateStatus(this.props.movie)

    }
  }



  render() {

    let displayMovie = this.props.movie.data.movieList.map((item,i)=>{

      let status;

      if (item.status) {
        status = 'success'
      }else {
        status = 'primary'
      }

      return(
        <Button onClick={this.handleClick(i)} bsSize="large"  bsStyle={status} style={{marginRight:20,marginBottom:20}} key={i}>{item.name}</Button>
      )
    })

    return (
      <Well style={{marginTop:20}}>
          <Row>
            <Col md={5}>
              {displayMovie}
            </Col>

          </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
    return {
      movie:state.movie
    }
}

function mapDispatchToProps(dispatch) {
    return {
      movieActions: bindActionCreators(movieActions, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
