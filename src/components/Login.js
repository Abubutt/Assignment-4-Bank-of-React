// src/components/Login.js
// The LogIn component is used to demonstrate the use of Redirect.

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styled from "styled-components";

const Division = styled.div`
  background: linear-gradient(lightGreen, white);
`

const Labels = styled.div`
  font-size: 18px;
`

const Header = styled.h1`
  padding: 5px;
  text-align: center;
  color: black;
  font-size: 30px;
`

const Inputs = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

const Button = styled.a`
  font-family: monospace;
  font-size: 15px;
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 6rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  letter-spacing: 0.1px;
`

class LogIn extends Component {
  constructor () {  // Create and initialize state
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  // When the user name input is changed, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  
  render () {
    if (this.state.redirect) {  // Redirect to "User Profile" page when "Log In" button is clicked
      return (<Redirect to="/userProfile"/>)
    }
    // Render the login form
    return (
      <Division>
        <Header>Login</Header>

        <form onSubmit={this.handleSubmit}>
          <div>
            <Labels htmlFor="userName">User Name</Labels>
            <Inputs type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <Labels htmlFor="password">Password</Labels>
            <Inputs type="password" name="password" />
          </div>
          <Button>Log In</Button>
        </form>                  
      </Division>
    )
  }
}

export default LogIn