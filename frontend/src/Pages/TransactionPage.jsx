import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import NavBar from '../Components/NavBar'
import { getTransactionReducer } from '../Store/Slice/UserDetailSlice'
import ContactUs from './ContactUs'

const TransactionPage = () => {
    const dispatch = useDispatch();
    const { transaction } = useSelector((state) => state.UserDetailSlice);
    const {message , status , x1} = {...transaction};;
    // console.log("transaction" , x1  );

    useEffect(()=>{
        dispatch(getTransactionReducer());
    },[dispatch , transaction  ])



  return (
<div>
    <NavBar />

    <div className="container px-4 lg:w-[40%]  m-auto h-full ">
        {/* <div className="customer text-center text-5xl my-5 font-serif ">Transaction */}
        {/* </div> */}
       <div className="text-black  " > <Heading heading="Transaction"  font="2xl" />  </div> 
 
            <div className="divPage ">

                {x1 && x1.map((curEl,ix)=>(

                <div role="alert" key={ix} className="my-4 px-3">
                    <div className="bg-blue-400 text-white font-bold rounded-t px-4 py-2 ">
                    Transaction Successfully
                    </div>
                    <div className="border border-t-0 flex gap-5 border-red-400 rounded-b bg-blue-100 px-4 py-3 text-black">
                       <span>💰💰</span> <p style={{wordSpacing: "3px"}}><span className=" font-bold ">{curEl.user1}</span> transfers  ₹{curEl.count} to <span className=" font-bold ">{curEl.user2}. </span> </p>
                    </div>
                </div>
                ))}



            </div>
    </div>

    
<ContactUs />
   <Footer />
</div>

  )
}

export default TransactionPage
