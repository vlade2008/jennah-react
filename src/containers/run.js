/**
 * Created by albertoclarit on 1/9/16.
 */



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../stores/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import {
    Route,
    IndexRoute,
    Router,
    IndexRedirect
}  from 'react-router';

//import the components
import Index from '../components/Index'


require('../fonts/sourcesanspro/css/fonts.css');
require('font-awesome/css/font-awesome.css');
require('../styles/bootstrap-less/bootstrap/bootstrap.less');
require('../styles/layout.less');


var initialState={

};

const store = configureStore(initialState,browserHistory);
const enhanceHistory = syncHistoryWithStore(browserHistory,store);

var Routes = (
    <Provider store={store}>
            <Router history={enhanceHistory}>
                <Route path ="/" component={App}>
                       <IndexRoute component={Index}/>
                </Route>
            </Router>
    </Provider>
);



ReactDOM.render(Routes, document.getElementById('app'));
