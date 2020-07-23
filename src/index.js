import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Add from './Add';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const history = createHistory();

const routing = (
  <Router history={history}>
      {/* <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/Add'>Add Note</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
        <li>
          <Link to='/Register'>Register</Link>
        </li>
      </ul> */}
      <Route exact path='/' component={Dashboard} />
      <Route path='/Add' component={Add} />
      <Route path='/Login' component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/ForgotPassword' component={ForgotPassword} />
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
