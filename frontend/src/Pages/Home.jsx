import React from 'react'
import Footer from '../Components/Footer'
import HomePic from '../Components/HomePic'
import NavBar from '../Components/NavBar'
import Cards from './Cards'
import ContactUs from './ContactUs'
import TransactionHomePage from './TransactionHomePage'

const Home = () => {
  return (
    <div>
    <NavBar    />
                <HomePic />
                <Cards />
                {/* <TransactionHomePage /> */}
        <ContactUs    />  
        <Footer />
    </div>
  )
}

export default Home
