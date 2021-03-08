import React, { Component } from 'react';
import Home from '../components/Home';
import BuyForm from '../components/Forms/BuyForm';




const HomeScreen = (props) => {
  
  return (
    <div>
      <BuyForm web3={props.web3} accounts={props.accounts} instance={props.instance} />
      <Home />
    </div>
  )
}

export default HomeScreen