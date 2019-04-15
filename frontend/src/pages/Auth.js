import React, { Component } from 'react'
import AuthContext from '../context/auth-context';
import './Auth.css';
export default class Auth extends Component {

  state = {
    isLogin: true,
    email: '',
    password: ''
  }

  static contextType = AuthContext;


  switchModeHandler = () => {
    this.setState(prevState =>{
      return {isLogin: !prevState.isLogin }
    })
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
    console.log(email,password);

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"}) {
              _id
              email
            }
          }
        `
      };
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        if(resData.data.login.token) {
          this.context.login(resData.data.login.token, resData.data.login.userId, resData.data.login.tokenExpiration);
        }
      })
      .catch(err => {
        console.log(err);
      });

   
  };

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
        <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? "Signin" : "Signup"} </button>
      </div>
    </form>
    )
  }
}
