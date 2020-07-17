import React from 'react';
import { db } from './config/firebase-config';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      collegeName: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    db.collection('users').add({
      fullName: this.state.fullName,
      email: this.state.email,
      collegeName: this.state.collegeName,
      password: this.state.password,
    })
    this.setState({
      fullName: '',
      email: '',
      collegeName: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Full Name
              <input type="text" name="fullName" className="fullName, inputCSS" value={this.state.fullName} onChange={event => this.handleChange(event, "fullName")} />
            </label>
          </div>
          <div>
            <label>
              Email
              <input type="text" name="email" className="email, inputCSS" value={this.state.email} onChange={event => this.handleChange(event, "email")} />
            </label>
          </div>
          <div>
            <label>
              College Name
              <input type="text" name="collegeName" className="collegeName, inputCSS" value={this.state.collegeName} onChange={event => this.handleChange(event, "collegeName")} />
            </label>
          </div>
          <div>
            <label> 
              Password
              <input type="password" name="password" className="password, inputCSS" value={this.state.password} onChange={event => this.handleChange(event, "password")} />
            </label>
          </div>
          <div className="submit">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        </div>
      </div>
    );
  }

}

export default Register