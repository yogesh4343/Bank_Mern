import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSingleUserReducer, UserGettingReducer } from '../Store/Slice/UserDetailSlice';
import Heading from './Heading';

const Pagination = () => {
  const dispatch = useDispatch() ;

  useEffect(()=>{
    dispatch(UserGettingReducer());
  },[]);


    const numberOfPages = 5;
    const [currentPage , setCurrentPage] = useState(1);

    const { gettingUsers,  } = useSelector((state) => state.UserDetailSlice);
    const {singleUserDetail} = {...gettingUsers};
    // console.log("singleUserDetail" , singleUserDetail  );


   

    // let arr = [
    //     {value:"1"},
    //     {value:"2"},
    //     {value:"3"},
    //     {value:"4"},
    //     {value:"5"},
    //     {value:"6"},
    // ]



        // let lastIdx = currentPage * numberOfPages ;
        // let firstIdx = lastIdx - numberOfPages; 
        // // const records = arr.slice(firstIdx, lastIdx);;
        // const records = singleUserDetail.slice(firstIdx, lastIdx);;
        // // const nPages = Math.ceil(arr.length / numberOfPages);
        // const nPages = Math.ceil(singleUserDetail.length / numberOfPages);
        // let numbersArr = [...Array(nPages + 1).keys()].slice(1);;

        // const changeCPage = (id)=>{
        //     setCurrentPage(id);;
        // }

        // const prevPage = ()=> {
        //                 if(currentPage !== 1){
        //                     setCurrentPage(currentPage - 1);
        //                 }
        // }

        // const nextPage = ()=>{


        //     if(currentPage !== nPages){
        //         setCurrentPage(currentPage + 1);
        //     }
        // }

        const transactionBtn = (id)=>{
          // console.log("TransactionBtn" , id);
          dispatch(getSingleUserReducer(id));


        }

  return (
    <div className="container m-auto h-cover ">
    <div className="text-black">  <Heading heading="Customer"  font="2xl"   />  </div>
     {/* <div className="customer text-center text-2xl my-5 font-serif">Customer</div> */}
      <div className="flex flex-col justify-center  m-auto items-center  flex-wrap">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-[60rem] inline-block align-middle">
      <div className="">

    
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">S.No</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Transfer</th>
            </tr>
          </thead>
          <tbody>

        



            {singleUserDetail && singleUserDetail.map((curEl , ix)=>(
            <tr key={ix} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{ix + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{curEl.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{curEl.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium text-blue-600 " onClick={()=>transactionBtn(curEl._id)}>
                <NavLink to={`/yourTransaction/${curEl._id}`} type="button" className=" inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Transfer</NavLink>
              </td>
            </tr>
        ))}


{/* 
            {records.map((curEl)=>(
            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{curEl.value}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{curEl.value}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
              </td>
            </tr>
        ))} */}


          </tbody>
        </table>

        {/* <nav>
            <ul>
                <li onClick={prevPage}>Prev</li>
                {numbersArr.map((n , i)=>(
                    <a className={` ${currentPage === n } ? "active" : ""`} key={i}>  <a className="" onClick={()=>changeCPage(n)}>{n}</a> </a>
                ))}
                <li onClick={nextPage} >next</li>
            </ul>
        </nav> */}


{/* <nav aria-label="Page navigation  "  style={{display:'flex' , justifyContent:"center", marginTop:"21px",   }}>
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prevPage}  >Previous</a>
    </li>
    
{numbersArr.map((n,i)=>(
                <li>

<a href="#"  className={`flex items-center   justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={()=>changeCPage(n)} >{n}</a>

</li>
))}


    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPage}  >Next</a>
    </li>
  </ul>
</nav> */}



      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pagination
