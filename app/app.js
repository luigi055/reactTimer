import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';


// Lload foundation to our components with webpack
$(document).foundation();
// App styles
require('style!css!sass!./styles/styles.scss');

//weather will be the main view and will be the same path as its parent
//so IndexRoute means that it will be render in the same path in 
//this.props.children
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="/countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
