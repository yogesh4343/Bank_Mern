
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Buttons from '../Components/Buttons'
import CheckoutSteps from '../Components/CheckoutSteps'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import NavBar from '../Components/NavBar'
import { UserDetailReducer } from '../Store/Slice/UserDetailSlice'
import ContactUs from './ContactUs'
import Details2 from './Details2';

const UserDetail = () => {
	const dispatch = useDispatch() ;
  const navigate = useNavigate();
  const { part1 } = useSelector((state) => state.UserDetailSlice);

	const [inputs , setInputs] = useState({
		// firstName : part1.firstName,
    // lastName: part1.lastName,
    // Address:part1.Address,
		// gender:part1.gender,
		// DOB:part1.DOB,
		// Phone:part1.Phone,
		firstName : part1.firstName,
    lastName: "",
    Address:"",
		gender:"",
		DOB:"",
		Phone:"",
	});

  // if(inputs.firstName   || !inputs.lastName || !inputs.Address || !inputs.gender || !inputs.DOB || !inputs.Phone){
    // alert(`Please Fill All Details`);
  // }

  


  const handleSubmit =(e)=>{
    
    e.preventDefault();

    if(inputs.firstName == "" || inputs.lastName == "" || inputs.Address == "" || inputs.gender == "" || inputs.DOB == "" || inputs.Phone ==  ""){
      alert(`Please Fill All Details ` );
      navigate("/userDetail")
    }

    // console.log("inputs" , inputs);;
    dispatch(UserDetailReducer(inputs))
  }


  return (
    <div >
   
   <NavBar />
<CheckoutSteps activeStep={0}  />

 <div  className="text-black "    > <Heading heading="Fill Your Details Here " font="2xl" />  </div> 

<div className="div flex justify-center items-center text-black flex-col gap-0 pt-8 px-4 md:pt-0 bg-gray-100">


   

<form onSubmit={handleSubmit} className=" md:max-w-6xl pt-8 px-4 md:pt-0 flex flex-col justify-center md:text-center md:h-screen md:w-screen">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" value={inputs.firstName}
							onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })} />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>


    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" value={inputs.lastName}
							onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })} />
    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Add"   value={inputs.Address}
							onChange={(e) => setInputs({ ...inputs, Address: e.target.value })}  />
    </div>
   
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Gender
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  value={inputs.gender} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}   >
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

  </div>
  
  <div className="flex flex-wrap -mx-3 mb-2">
   
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Date Of Birth
      </label>
      <div className="relative">
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="12/01/1024"  value={inputs.DOB}
							onChange={(e) => setInputs({ ...inputs, DOB: e.target.value })}  />
       
      </div>
    </div>


    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Phone Number
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"   value={inputs.Phone}
							onChange={(e) => setInputs({ ...inputs, Phone: e.target.value })}  />
    </div>
  </div>
   <div className="my-12 w-[20rem]  float-end" onClick={handleSubmit} >
  <NavLink to="/details2">
    <Buttons  btn="Next" width="w-[100%]"  />
  </NavLink> 


   </div>
</form>
</div>

   
<ContactUs />
   <Footer />

    </div>
  )
}

export default UserDetail
