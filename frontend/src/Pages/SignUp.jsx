import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';import Buttons from '../Components/Buttons';
import { SignUpReducer } from '../Store/Slice/UserSlice';
;

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch() 

	const [inputs , setInputs] = useState({
		name : "",
        email: "",
        password:"",
		gender:"male",
	})

	

	// useEffect(()=>{
	// 	// 
	// })

	const handleSubmit = (e) =>{
		e.preventDefault();
		// console.log(inputs);
		dispatch(SignUpReducer(inputs))
	}
  return (
    <div>
     <div>
     <div className="  flex justify-center gap-12 flex-col w-screen items-center  h-screen bg-[url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load')]  ">
			<div className=' p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{background:"black"}}>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500 text-wrap'> For Transaction</span>
				</h1>

				<form onSubmit={handleSubmit}>
				{/* <form > */}
					<div className='my-5 '>
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-300 '> Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered text-black h-10 p-4 '
							value={inputs.name}
							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
						/>
					</div>

					<div className='my-5 ' >
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-300 '>Email</span>
						</label>
						<input
							type='email'
							placeholder='@gmail.com'
							className='w-full input text-black input-bordered h-10 p-4  '
							value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
						/>
					</div>

					<div  className='my-5 '     >
						<label className='label'>
							<span className='text-base label-text text-gray-300 '>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input text-black input-bordered h-10 p-4  '
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					{/* <div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							// value={inputs.confirmPassword}
							// onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div> */}

					{/* <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} /> */}
					{/* <GenderCheckBox /> */}

					{/* <Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link> */}

					<div className="w-full  px-3 mb-6 md:mb-0 my-5  ">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2 text-gray-300     " htmlFor="grid-state">
        Gender
      </label>
      <div className="relative">
        <select value={inputs.gender} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
<br />
					<NavLink to="/login" className="hover:text-blue-500 font-serif "   > Redirect to- Login </NavLink>


					<div className="  my-7  " onClick={handleSubmit}  >
						<Buttons btn="Sign In"  />
						{/* <button className='btn btn-block btn-sm mt-2 border border-red-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button> */}
					</div>
				</form>
			</div>
		</div>
    </div>
    </div>
  )
}

export default SignUp
