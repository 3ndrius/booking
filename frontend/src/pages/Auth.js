import React, { Component } from 'react'

import './Auth.css';
export default class Auth extends Component {

  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if(email.trim().length === 0 || password.trim().length === 0) {
      return ;
    }
    console.log("email",+ email, "password", password);
  }

  render() {
    return (
     <form className="auth-form" onSubmit={this.handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={this.handleChange} id="email" name="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={this.handleChange} id="password" name="password" />
      </div>
      <div className="form-action">
        <button type="submit">Submit</button>
        <button type="button">Switch to Signup</button>
      </div>
    </form>
    )
  }
}
