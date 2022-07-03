// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Division = styled.div`
  background: linear-gradient(lightGreen, white);
`

const Header = styled.h1`
  padding: 10px;
  text-align: center;
  color: black;
  font-size: 50px;
  letter-spacing: 1px;
`

const Button = styled.a`
  font-family: monospace;
  font-size: 20px;
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  letter-spacing: 0.1px;
`

class Home extends Component {
  render() {
    return (
      <Division>
        <img src="https://picsum.photos/200/200" alt="bank"/>
        <Header>Bank of React</Header>

        <Button href="/Assignment-4-Bank-of-React/userProfile">User Profile</Button>
        <br/>
        <Button href="/Assignment-4-Bank-of-React/login">Login</Button>
        <br/>
        <Button href="/Assignment-4-Bank-of-React/credits">Credits</Button>
        <br/>
        <Button href="/Assignment-4-Bank-of-React/debits">Debits</Button>
        <br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </Division>
    );
  }
}

export default Home;
