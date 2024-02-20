import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../Pages/Cards'
import Buttons from './Buttons'
import TypeWriter from './TypeWriter'

const HomePic = () => {
  return (
    <div>
      <div className="  flex justify-center gap-12 flex-col w-screen   h-screen bg-[url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load')] mb-14 ">
        <div className="main    ">
        <div className="   flex flex-col h-full justify-center ">
                {/* <div className="heading flex text-4xl lg:text-[60px] font-bold   text-white justify-center items-center  text-center align-middle "> Your streaming guide for  </div> */}
                
                <div className=' mt-5 flex text-4xl lg:text-[70px] font-bold  justify-center items-center  text-center align-middle  text-purple-900 dark:text-purple-600 '>  <TypeWriter />   </div>
                </div>
        </div>

        <div className="para  text-gray-300 text-[26px] text-wrap  flex justify-center items-center text-center">
       This is a simple banking System App through which you can create an account and transfer Money with each Other. 
        </div>


                        <div className="flex justify-center">

        <NavLink to="/customers" >   <Buttons className="bts" btn="Transfer Money" clr="black" /> </NavLink>
                        </div>

                       {/* <div className="cardsCont absolute -bottom-48 ">
                       <Cards  />
                       </div> */}
      
      </div>
    </div>
  )
}

export default HomePic