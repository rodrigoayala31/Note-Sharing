import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
        <li>
          <Link to='/Register'>Register</Link>
        </li>
      </ul>
      <Route exact path='/' component={App} />
      <Route path='/Dashboard' component={Dashboard} />
      <Route path='/Login' component={Login} />
      <Route path='/Register' component={Register} />
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
