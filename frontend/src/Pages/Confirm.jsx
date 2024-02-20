
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Buttons from '../Components/Buttons'
import CheckoutSteps from '../Components/CheckoutSteps'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import KeyValue from '../Components/KeyValue'
import NavBar from '../Components/NavBar';
import { Table, Table1, Table2 } from '../Components/Table'
import { UserDetailSubmitReducer, UserGettingReducer } from '../Store/Slice/UserDetailSlice'
import ContactUs from './ContactUs'

const Confirm = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const { part1 , part2} = useSelector((state) => state.UserDetailSlice);
	// console.log("userLoginDetail" ,  part1 , part2);;

   let obj = {
      firstName : part1.firstName,
      lastName : part1.lastName,
      Address : part1.Address,
      gender : part1.gender,
      DOB : part1.DOB,
      Phone : part1.Phone,
      userName : part2.userName,
      accountType : part2.accountType,
      email : part2.email,
      amount : part2.amount,
      employment : part2.employment
    }

    // console.log("obj" , obj);
    

    const SubmitForm = (e)=>{
      e.preventDefault();
      dispatch(UserDetailSubmitReducer(obj));
      navigate("/customers");
      
    }


  return (
    <div  >
    <NavBar />
    <CheckoutSteps activeStep={2}  />
   <div className="text-black " > <Heading heading="Confirm Your Details Here "    font="2xl"         /> </div>


    <div className="main text-black mt-12  ">
            {/* <div className="text-center justify-center  font-bold text-5xl text-zinc-200 my-12">CONFIRM </div> */}
      <div className="container  m-auto  flex  justify-center  gap-5 flex-wrap  md:flex-nowrap">
            

     <div className="leftMain "  style={{maxWidth:"80%" ,  width:"80%"}}    >
     <div className="left ">
     {/* <div className="left  flex flex-col justify-center gap-7 "> */}
            {/* <div className="category  flex justify-around "> <div className="name">Category</div> <div className="value flex justify-around ">Category value</div> </div> */}

            {/* <KeyValue name="First Name" value={part1.firstName} />
            <KeyValue name="Last Name" value={part1.lastName} />
            <KeyValue name="Address" value={part1.Address} />
            <KeyValue name="Gender" value= {part1.gender} />
            <KeyValue name="Phone" value={part1.Phone} />
            <KeyValue name="DOB" value={part1.DOB} /> */}

        <Table1 val={part1} />
        </div>
     </div>

       <div className="rightMain   flex flex-col my-4   " style={{maxWidth:"80%" ,  width:"80%"}}>
       <div className="right flex flex-col  gap-7 ">
        {/* <div className="category flex justify-around  "> <div className="name">Category</div> <div className="value">Category value</div> </div>
           
            <KeyValue name="Account- User Name" value={part2.userName} />
            <KeyValue name="Account Type" value={part2.accountType} />
            <KeyValue name="Email" value={part2.email} />
            <KeyValue name="Deposite Amt" value={part2.amount} />
            <KeyValue name="Employment Status" value={part2.employment} /> */}

            <Table2 val={part2} />
        </div>
       </div>


      </div>
    </div>
       <div className="my-12  justify-center flex  ">
  <NavLink to="/customers" onClick={SubmitForm}>
    <Buttons btn="Confirm Details" width="w-full" />
  </NavLink> 
   </div>

  <ContactUs />
   <Footer />
    </div>
  )
}

export default Confirm
