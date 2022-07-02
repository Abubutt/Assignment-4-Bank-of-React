import React from 'react'
import { Link } from "react-router-dom";

const Credits = ({
    addCredit, 
    balance, 
    credits
}) => {

  const creditsView = () => {
    return credits?.map((credit, index) => {
      let date = credit.date.slice(0, 10);
      return (
        <li key={index}>
          {credit.amount} 
          {credit.description}
          {date}
        </li>
      );
    });
  };


  return (
    <div>
      <h1>Credit</h1>
      <h4>Balance: {balance}</h4>
      {creditsView()}
      <form onSubmit={addCredit}>
        <label id="description"> Description: </label>
        <input type="text" name="description"/>
        <label id="amount"> Amount: </label>
        <input type="number" name="amount"  step="0.01"/>
        <button type="submit">Add Credits</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Credits;