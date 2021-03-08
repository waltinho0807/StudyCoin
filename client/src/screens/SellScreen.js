import React, {Component} from 'react';
import SellForm from '../components/Forms/SellForm';
import List from '../components/Sell/List';




const SellScreen = (props) => {
  
  return (
    <div>
      <SellForm web3={props.web3} accounts={props.accounts} instance={props.instance} />
      <List web3={props.web3} accounts={props.accounts} instance={props.instance} listSeller={props.listSeller} />
    </div>
  )
}

export default SellScreen   