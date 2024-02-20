import React from 'react';
import Card from '../Components/Card';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { NavLink } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="  flex flex-wrap justify-center gap-4  ">
     <NavLink to="/userDetail" className="hover:font-serif hover:text-blue-400 " >    <Card  name="1. Create Account"  cont=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, provident quia iure vitae nostrum similique . Odit, provident quia iure vitae nostrum similique." icon=<AccountBalanceIcon /> /> </NavLink>


       <NavLink to="/customers" className="hover:font-serif hover:text-blue-400 "> <Card  name="2.  Transfer Money"  cont=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, provident quia iure vitae nostrum similique . Odit, provident quia iure vitae nostrum similique." icon=<CurrencyExchangeIcon /> /> </NavLink>

       <NavLink to="/transaction" className="hover:font-serif hover:text-blue-400 " >  <Card  name="1. Transaction History"  cont=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, provident quia iure vitae nostrum similique . Odit, provident quia iure vitae nostrum similique." icon=<HistoryEduIcon /> />  </NavLink>  


    </div>
  )
}

export default Cards
