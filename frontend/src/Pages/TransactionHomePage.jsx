import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Buttons from '../Components/Buttons';
import Heading from '../Components/Heading'
import NavBar from '../Components/NavBar';
import { getTransactionReducer } from '../Store/Slice/UserDetailSlice';

const TransactionHomePage = () => {

    const dispatch = useDispatch();;

    const { transaction } = useSelector((state) => state.UserDetailSlice);
    const { message, status, x1 } = { ...transaction };
    // const arrRev = x1.reverse();
    // console.log(`Transaction Home Page : ` , arrRev );

let arr = [];

    useEffect(() => {
        dispatch(getTransactionReducer());;;;
    }, [dispatch])


    return (
        <div className="my-24">
            {/* <div className="text-black  " > <Heading heading="Some Previous Transaction"  font="2xl" />  </div>  */}
            <div className=" text-center mt-5  text-purple-600  text-[30px] sm:text-[40px]  lg:text-[54px] font-bold   " >  Some Previous Transaction
    </div>

                <div className="transactionContainer">
                    <div className="divPage  lg:w-[60%]  m-auto h-full ">

                        {/* {(x1) ? <>
                            <div className="text-black text-center my-7 font-serif text-3xl">
                                No  trans
                            </div>
                            <NavLink to="/customers" > <Buttons btn="Make a Transaction 💰💰..." />  </NavLink>
                        </> :
                        <>
                        {x1 && x1.map((curEl, ix) => {
                            if (ix < 3) {
                                return (
                                    <div role="alert" key={ix} className="my-4 px-3">
                                        <div className="bg-blue-400 text-white font-bold rounded-t px-4 py-2 ">
                                            Transaction Successfully ✅✅
                                        </div>
                                        <div className="border border-t-0 flex gap-5 border-red-400 rounded-b bg-blue-100 px-4 py-3 text-black">
                                            <span>💰💰</span> <p style={{ wordSpacing: "3px" }}><span className=" font-bold ">{curEl.user1}</span> transfers  ₹{curEl.count} to <span className=" font-bold ">{curEl.user2}. </span> </p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <NavLink to="/transaction" > <Buttons btn="Click For More Transactions 💰💰..." />  </NavLink>

                        </>
                        } */}



{Array.isArray(x1) && x1.length ? <>  {x1 && x1.map((curEl, ix) => {
                            if (ix < 3) {
                                return (
                                    <div  key={ix}>
                                    <div role="alert" key={ix} className="my-4 px-3">
                                        <div className="bg-blue-400 text-white font-bold rounded-t px-4 py-2 ">
                                            Transaction Successfully ✅✅
                                        </div>
                                        <div className="border border-t-0 flex gap-5 border-red-400 rounded-b bg-blue-100 px-4 py-3 text-black">
                                            <span>💰💰</span> <p style={{ wordSpacing: "3px" }}><span className=" font-bold ">{curEl.user1}</span> transfers  ₹{curEl.count} to <span className=" font-bold ">{curEl.user2}. </span> </p>
                                        </div>
                                    </div>

                                        </div>

                                )
                            }
                        })}
                                    <NavLink to="/transaction" > <Buttons btn="Click For All Transactions 💰💰..." />  </NavLink>
                        </> : <> 
                            <div className="text-black text-center my-7 font-serif text-3xl text-center items-center flex justify-center ">
                               <img className="w-24 " src="https://cdn-icons-png.flaticon.com/512/2761/2761118.png" alt="" />
                            </div>
                            <NavLink to="/customers" > <Buttons btn="Make a Transaction 💰💰..." />  </NavLink>
                        </>  };
                      


                    </div>
            </div>
        </div>
    )
}

export default TransactionHomePage
