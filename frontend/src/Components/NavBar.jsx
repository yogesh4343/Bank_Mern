import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserGettingReducer } from '../Store/Slice/UserDetailSlice';
import { LogoutReducer } from '../Store/Slice/UserSlice';

const NavBar = () => {


  const { userLoginDetail } = useSelector((state) => state.UserSlice);
	// console.log("userLoginDetail" ,  userLoginDetail);;
  const navigate = useNavigate();

  const [navHide , setNavHide] = useState(true);
  // console.log("navHide" , navHide)   ;

  const dispatch = useDispatch();
  const logoutClick = (e)=>{
    e.preventDefault();
    dispatch(LogoutReducer());
    // if(userLoginDetail.status == true){

    //   		navigate('/');
    //   	}else{
    //   		navigate("/login");
    //   	}

  }

 


  useEffect(()=> {
    if(!userLoginDetail.status == true){

      navigate("/login");
		}
  },[userLoginDetail.status]);

  const CustomerFunc = (e)=>{
    // console.log("CustomerFunc");
    e.preventDefault();
    dispatch(UserGettingReducer());
    // navigate("/customers")
  }

  const hide = ()=>{
    if(navHide == true){
      setNavHide(false);
      
    }
    else{
      setNavHide(true);
    }
  }
  
  return (
    <div>
      

<nav className="bg-white text-black border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TR</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

  
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logoutClick}>LogOut </button>

      <button data-collapse-toggle="navbar-cta" type="button" onClick={hide} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>


  </div>
  <div className={`items-center justify-between ${navHide == true ? "hidden" : ""} w-full md:flex md:w-auto md:order-1" id="navbar-cta    `}>
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/userDetail" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Account</NavLink>
      </li>
      <li onClick={CustomerFunc} >
        <NavLink to="/customers" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Customers</NavLink>
      </li>
      {/* <li>
        <NavLink to="/yourTransaction" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Your Transaction</NavLink>
      </li> */}
    
      {/* <li>
        <NavLink to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</NavLink>
      </li> */}
      
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar
