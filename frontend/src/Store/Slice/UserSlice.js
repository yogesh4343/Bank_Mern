import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});

const UserSlice = createSlice({
    name:"user",
    initialState:{
        status: STATUS.ERROR,
        userDetail:{},
        // userLoginDetail:{},
        userLoginDetail:localStorage.getItem("BankUserLogin")? JSON.parse(localStorage.getItem("BankUserLogin")) : {}
        
    },
    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },
        getUserDetail(state,action){
            state.userDetail = action.payload
        },
        getUserLogin(state,action){
            state.userLoginDetail = action.payload
        },
        getUserLogout(state,action){
            state.userLoginDetail = {};
        }

    }
})

export default UserSlice.reducer;

export const {getStatus , getUserDetail , getUserLogin ,getUserLogout   } = UserSlice.actions





 export function SignUpReducer(inputs){
    // console.log(inputs);
        return async function SignUpThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))
    
            const config = { headers : { "Content-Type" : "application/json"}};
            try{
    
                
                const {data} = await axios.post(`http://localhost:4000/api/register`, inputs , config)
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getUserDetail(data),
                )
                toast.success('Successfully toasted!')
            }catch(error){
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }


export function LoginReducer(inputs){
    return async function LoginThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        const config = { headers : { "Content-Type" : "application/json"}};
        try{

            
            const {data} = await axios.post(`http://localhost:4000/api/login`, inputs , config)
            // console.log(data);
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUserLogin(data),
                )
                toast.success('Successfully toasted!');
            

            localStorage.setItem("BankUserLogin" , JSON.stringify(data));
        }catch(error){
            // console.log(error.message);
            toast.error(error.message);
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}


// logout 
export function LogoutReducer(){
    return async function LogoutThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))
        try{

            
            const {data} = await axios.post(`http://localhost:4000/api/logout`)
            // console.log(data);
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUserLogout(data),
            )
            localStorage.removeItem("BankUserLogin");
            
        }catch(error){
            toast.error(error.message);
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}