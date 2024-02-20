import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Buttons from '../Components/Buttons'
import CheckoutSteps from '../Components/CheckoutSteps'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import NavBar from '../Components/NavBar'
import { UserDetailReducer, UserDetailReducerTwo } from '../Store/Slice/UserDetailSlice';import ContactUs from './ContactUs'
;



const Details2 = () => {
	const { part2 } = useSelector((state) => state.UserDetailSlice);
	// console.log("userLoginDetail" ,  part2);;

  const dispatch = useDispatch() ;

  const navigate = useNavigate();

	const [inputs , setInputs] = useState({
		userName : "",
    accountType: "",
    email:"",
		amount:"",
		employment:"",

		// userName : part2.userName,
    // accountType: part2.accountType,
    // email: part2.email,
		// amount: part2.amount,
		// employment: part2.employment,

	})

  // let obj = {
  //   firstName : part1.firstName,
  //   lastName : part1.lastName,
  //   Address : part1.Address,
  //   gender : part1.gender,
  //   DOB : part1.DOB,
  //   Phone : part1.Phone,
  //   userName : inputs.userName,
  //   accountType : inputs.accountType,
  //   email : inputs.email,
  //   amount : inputs.amount,
  //   employment : inputs.employment
  // }
    // part1.userName = inputs.userName
    // part1.accountType = inputs.accountType
    // part1.email = inputs.email
    // part1.amount = inputs.amount
    // part1.employment = inputs.employment


   

  const handleSubmit =(e)=>{
    e.preventDefault();

    // if(typeof(inputs.userName) === 'string' ){
    //   alert('Please enter a valid Account Number!');
    //   navigate("/details2")
    // }else
    //  if( typeof(inputs.amount) === 'string'){
    //   alert('Please enter a valid amount!');
    //   navigate("/details2")
    // };;


    if(inputs.userName == "" || inputs.accountType == "" || inputs.email == "" || inputs.amount == "" || inputs.employment == ""){
      alert(`Please Fill All Details ` );
      navigate("/details2")
    }


    // dispatch(UserDetailReducerTwo(obj))
    dispatch(UserDetailReducerTwo(inputs))
  }


  return (
    <div >
        <NavBar  />
        
      <CheckoutSteps activeStep={1}  />

        <div className="text-black" >  <Heading heading="Fill Your BankDetails Here  "  font="2xl"  />  </div>



        <div className="div flex justify-center items-center text-black flex-col gap-0 pt-8 px-4 md:pt-0 bg-gray-100">


<form onSubmit={handleSubmit} className=" md:max-w-6xl pt-8 px-4 md:pt-0 flex flex-col justify-center md:text-center md:h-screen md:w-screen">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Account- UserName
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="UserName"  value={inputs.userName}
							onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}  />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>


    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Account Type
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  value={inputs.accountType}
							onChange={(e) => setInputs({ ...inputs, accountType: e.target.value })}  >
          <option>Choose Account </option>
          <option>Saving Account </option>
          <option>Current Account</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>


  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email 
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email"   value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}  />
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Deposite Amount 
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Deposite Amount "  value={inputs.amount}
							onChange={(e) => setInputs({ ...inputs, amount: e.target.value })}   />
    </div>
   
    <div className="w-full md:w-1/3 px-3 mb-6 md:mt-5">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Employment Status
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  value={inputs.employment}
							onChange={(e) => setInputs({ ...inputs, employment: e.target.value })}  >
          <option>Choose Employment</option>
          <option>Student</option>
          <option>Employed</option>
          <option>Un Employed</option>
          <option>Retired</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

  </div>
 
   <div className="my-12 w-[100%] gap-4 flex justify-between">
   {/* <NavLink to="/userDetails"> <Buttons btn="Prev" width="w-[70%]" /> </NavLink> */}
   <NavLink to="/userDetail"> <Buttons btn="Prev" width="w-[70%]" /> </NavLink>
  <div onClick={handleSubmit} ><NavLink to="/confirm" > <Buttons btn="Next" width="w-[70%]" /> </NavLink> </div> 
   </div>
</form>
</div>

<ContactUs />
   <Footer />


    </div>
  )
}

export default Details2
