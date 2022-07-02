// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios";
import {v4 as uuidv4} from 'uuid'; 



class App extends Component {

  constructor() { 
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    }
  }

  balance=()=>
  {
    return this.state.accountBalance;
  }
  
  async componentDidMount(){  
    let debits = await (await axios.get("https://moj-api.herokuapp.com/debits")).data;
    let credits = await (await axios.get("https://moj-api.herokuapp.com/credits")).data;
   
    // console.log(debits);
    // console.log(credits);

    let debit_total = 0;
    let credit_total = 0;
    debits.forEach((debit) => {
      debit_total += debit.amount
    })
    credits.forEach((credit) => {
      credit_total += credit.amount
    })

    let accountBalance = (credit_total - debit_total).toFixed(2);
    this.setState({debits, credits, accountBalance});
  } 


  updatedBalance = () => {
    this.setState(state => {
      const credits = state.credits;
      const debits = state.debits;

      const creditsTotal = credits.reduce((a, b) => a + b.amount, 0);
      const debitsTotal = debits.reduce((a, b) => a + b.amount, 0);
      return {accountBalance: (creditsTotal - debitsTotal).toFixed(2)};
    })
  }         

  addCredit = (e) => {
    e.preventDefault();
    this.setState({ credits: this.state.credits.concat([{
      id: uuidv4(),
      amount: parseFloat(e.target.elements.amount.value),
      description: e.target.elements.description.value,
      date: new Date().toISOString(),
    }]) });
    this.updatedBalance();
  }

  addDebit = (e) => {
    e.preventDefault();
    this.setState({ debits: this.state.debits.concat([{
      id: uuidv4(),
      amount: parseFloat(e.target.elements.amount.value),
      description: e.target.elements.description.value,
      date: new Date().toISOString(),
    }]) });
    this.updatedBalance();
}
  
   
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component

    const CreditsComponent = () => (
    <Credits 
      balance = {this.state.accountBalance} 
      addCredit = {this.addCredit}
      credits = {this.state.credits}
    />
    )
    
    const DebitsComponent = () => (
    <Debits 
      balance = {this.state.accountBalance} 
      addDebit = {this.addDebit}
      debits = {this.state.debits}
    />
    )
   

    return (
        <div>
          <Router>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
              <Route exact path="/login" render={LogInComponent}/>   
              <Route exact path="/credits" render={CreditsComponent}/>
              <Route exact path="/debits" render={DebitsComponent}/>
          </Router>
        </div>
    );
  }element
}

export default App;