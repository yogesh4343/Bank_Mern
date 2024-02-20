import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Buttons from '../Components/Buttons';
import NavBar from '../Components/NavBar'
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { getSingleUserReducer, getTransactionReducer, getUpdateUserReducer, postTransactionReducer, UserGettingReducer } from '../Store/Slice/UserDetailSlice';
import Heading from '../Components/Heading';
import ContactUs from './ContactUs';
import Footer from '../Components/Footer';

const Transaction = () => {

  const param = useParams();
  const navigate = useNavigate();
  // console.log(param.id);

  // api/singleUserDetail/65ce5b90f803a7ea9f037cfb

  const dispatch = useDispatch() ;

  const { singleUser } = useSelector((state) => state.UserDetailSlice);
  const {message , singleUserDetail , status} = {...singleUser};
  const {firstName , accountType , gender ,amount} = {...singleUserDetail}
  
  
  const { gettingUsers,  } = useSelector((state) => state.UserDetailSlice);
  const {singleUserDetail:allUser} = {...gettingUsers}
  // console.log("allUser" , allUser);

  const [price , setPrice ] = useState("");
  let newPrice = Number(price);
  const [secondUserId , setSecondUserId] = useState("");

// console.log(typeof(Number(price)) , typeof(amount))

  

  useEffect(()=>{
    dispatch(getSingleUserReducer(param.id));
    dispatch(UserGettingReducer());

  },[]);



  const optionClickFunc=(e)=>{
     let  userIdSecond = e.target.value;
     setSecondUserId(userIdSecond)
    // console.log("optionClickFunc" , userIdSecond);

  };


  let obj = {
    user1 : param.id ,
    user2 : secondUserId,
    count : newPrice
  }

  


  const sendBtnFunc=(e)=>{
    e.preventDefault();

    if(obj.user1 == "" || obj.user2 == "" || obj.count == "" ){
      alert(`Please Fill All Details ` );
      navigate(`/yourTransaction/${param.id}`)
    }else if(obj.user1 != "" || obj.user2 != "" || obj.count != "" ){
      dispatch(getTransactionReducer());
      dispatch(getTransactionReducer());
      navigate(`/transaction`);
    }


    // if(price > amount){
    //   alert("Please Send Less Amount, I  have only ₹" + amount ,);
    // };

   

    dispatch(getUpdateUserReducer(obj));
    dispatch(postTransactionReducer(obj));

    // 
  
    
    // console.log("user1=" , param.id , "user2" , secondUserId , "amount" , price);;

  };

  // const [firstName , setFirstName] = useState(singleUserDetail.firstName);


  return (
    <div>
      <NavBar />
      {/* Transaction */}
      {/* Transaction */}

     <div  className="text-black  ">  <Heading heading="Doo Transaction Here" />  </div>     

      <div className="container w-[80%]  m-auto my-16 bg-gray-200 p-6 text-black ">
        <div className="main flex ">

          <div className="left  w-[40%] m-auto text-center flex justify-center">
            <img src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" alt="img" />
          </div>




            <div className="rightWithBtn p-2 w-[50%]  ">
            <div className="right ">
            <div className="box ">
              <div className="nameCont flex justify-between p-2 text-3xl "> <div className="name font-bold text-[#9333e9]  ">{firstName}</div>  <div className="price">{amount}</div> </div>



              <div className="accCont flex justify-between p-2 text-xl "> <div className="cont"> {accountType} </div>  <div className="male">{gender} </div> </div>



              <div className="transferCont flex flex-col  p-2  gap-2">
                <div className="transferTo flex gap-4"> <div className="spanVal text-black  font-bold">transferTo 👉🏻</div> AccountNumber  </div>


                <div className="opt ">
                  <div className="relative">
                    <select onChange={(e)=>optionClickFunc(e)} className="block  appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="Choose Option">Choose Account No </option>
                    {allUser   && allUser.map((curEl, ix)=>(
                      <option  key={ix} value={curEl._id}>{curEl.userName}</option>
                    ))}
                      {/* <option value="female">Female</option> */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>


              </div>
              <div className=' text-black p-2  gap-2  '>
						<label className='label p-2'>
							<span className='text-base label-text text-black  '> Price</span>
						</label>
						<input type='text' onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='₹ 0000' className='w-full bg-gray-300  input input-bordered text-black h-10 p-4 '/>
					    </div>
            </div>
          </div>


          <div className='butn my-5' onClick={sendBtnFunc}> <Buttons btn="Send"  width="[12rem]" /> </div>
            </div>



        </div>
      </div>


<ContactUs />
   <Footer />

    </div>
  )
}

export default Transaction
