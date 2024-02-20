import React from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar'
import Pagination from '../Components/Pagination'
import ContactUs from './ContactUs';

const Customers = () => {

  return (
    <div >
      <NavBar />
        <Pagination  />
        <ContactUs />
   <Footer />
    </div>
  )
}

export default Customers
