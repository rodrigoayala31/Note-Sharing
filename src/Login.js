import React from "react";
import { db } from "./config/firebase-config";
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

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
      db.collection("users").add({
        username: this.state.username,
        password: this.state.password,
      })
      this.setState({
        username: '',
        password: '',
      })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Email" name="email" className="email, inputCSS" value={this.state.topic} onChange={event => this.handleChange(event, "topic")} />
          </div>
          <div>
            <input type="text" placeholder="Password" name="description" className="description, inputCSS" value={this.state.description} onChange={event => this.handleChange(event, "description")} />
          </div>
          <div>
            <p class="message">Not registered? <a href="/Register" className='go-sign-up'>Create an account</a></p>
          </div>
          <div className="submit">
            <button type="submit">Sign In</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
