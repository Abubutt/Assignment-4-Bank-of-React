// src/components/Debits.js
import React from 'react'
import { Link } from 'react-router-dom';
import '../Credits_Debits.css';

const Debits = ({
  addDebit,
  balance, 
  debits}) => {

	const debitsView = () => {
    return debits?.map((debit, index) => {
      let date = debit.date.slice(0, 10);
      return (
      <li class = "transaction" key={index}>
          {debit.amount}{' '}|{' '}
          {debit.description}{' '}|{' '}
          {date}
      </li>
        );
    }) ;
  };


  return (
    <div>
      <h1>Debits</h1>
      <h4>Balance: {balance}</h4>
      {debitsView()}
      <form onSubmit={addDebit}>
      <label id="description"> Description: </label>
        <input type="text" name="description" required/>
        <label id="amount"> Amount: </label>
        <input type="number" name="amount"  step="0.01" required/>
        <button type="submit">Add Debit</button>
      </form>
      <div class = "home-button"><Link to="/">Home</Link></div>
    </div>
  )
}

export default Debits;