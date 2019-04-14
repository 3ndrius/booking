import React, { Component } from 'react'

import './Auth.css';
export default class Auth extends Component {

  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
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
