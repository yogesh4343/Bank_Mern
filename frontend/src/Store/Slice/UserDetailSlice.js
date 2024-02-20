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

const UserDetailSlice = createSlice({
    name:"user",
    initialState:{
       part1 : localStorage.getItem("BankUserDetail")? JSON.parse(localStorage.getItem("BankUserDetail")) : {},
       part2 : localStorage.getItem("BankUserDetailTwo")? JSON.parse(localStorage.getItem("BankUserDetailTwo")) : {},
       gettingUsers : [],
       singleUser:{},
       updateUser:{},
       postTransaction : {},
       transaction:[],
        
        
    },
    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },

        getCompleteUserDetail(state, action){
            state.part1 = action.payload;
        },
        getCompleteUserDetailTwo(state, action){
            state.part2 = action.payload;
        },
        UserGetting(state, action){
            // state.gettingUsers.push(action.payload);
            state.gettingUsers = action.payload;
        },
        getSingleUser(state, action){
            // state.gettingUsers.push(action.payload);
            state.singleUser = action.payload;
        },
        getUpdateUser(state, action){
            state.updateUser = action.payload;
        },
        postTransaction(state, action){
            state.transaction = action.payload
        },
        getTransaction(state, action){
            state.transaction = action.payload
        }


    }
})

export default UserDetailSlice.reducer;

export const { getStatus  , getCompleteUserDetail  ,getCompleteUserDetailTwo , UserGetting  , getSingleUser ,getUpdateUser , postTransaction, getTransaction    } = UserDetailSlice.actions



export function UserDetailReducer(inputs){
    // console.log(inputs);
        return async function UserDetailThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))
            try{
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getCompleteUserDetail(inputs),
                )
                localStorage.setItem("BankUserDetail" , JSON.stringify(inputs));
            }catch(error){
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }



export function UserDetailReducerTwo(inputs){
    // console.log(inputs);
        return async function UserDetailReducerTwoThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))
            try{
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getCompleteUserDetailTwo(inputs),
                )
                localStorage.setItem("BankUserDetailTwo" , JSON.stringify(inputs));
            }catch(error){
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }





    // detail db 

    export function UserDetailSubmitReducer(inputs){
        // console.log(inputs);
        return async function UserDetailSubmitThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))
    
            const config = { headers : { "Content-Type" : "application/json"}};
            try{
    
                
                const {data} = await axios.post(`http://localhost:4000/api/enterUser`, inputs , config)
                // console.log("data" , data );
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                // dispatch(
                //     getDetailUser(data),
                //     )
                    toast.success('Successfully toasted!');
            }catch(error){
                console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }



    // user 
    export function UserGettingReducer(){
        return async function UserGettingReducerThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))

            try{
    
                
                const {data} = await axios.get(`http://localhost:4000/api/users`);;
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    UserGetting(data),
                    )
                    toast.success('Successfully toasted!');
            }catch(error){
                // console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }



    //  singlr user 
    export function getSingleUserReducer(id){
        return async function getSingleReducerThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))

            try{
    
                
                const {data} = await axios.get(`http://localhost:4000/api/singleUserDetail/${id}`);;
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getSingleUser(data),
                    )
                    toast.success('Successfully toasted!');
            }catch(error){
                // console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }





     //  update user 
     export function getUpdateUserReducer(obj){
        // console.log(obj);
        return async function getUpdateReducerThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))

            try{
    
                
                const {data} = await axios.put(`http://localhost:4000/api/transfer` , obj);;
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getUpdateUser(data),
                    )
                    toast.success('Successfully toasted!');
            }catch(error){
                // console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }




     //  tran user post
     export function postTransactionReducer(obj){
        return async function postTransactionReducerThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))

            try{
    
                
                const {data} = await axios.post(`http://localhost:4000/api/transaction` , obj);;
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    postTransaction(data),
                    )
                    toast.success('Successfully toasted!');
            }catch(error){
                // console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }

    

     //  tran user get
     export function getTransactionReducer(){
        return async function getTransactionReducerThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))

            try{
    
                
                const {data} = await axios.get(`http://localhost:4000/api/transactionAll`);;
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                )
                dispatch(
                    getTransaction(data),
                    )
                    toast.success('Successfully toasted!');
            }catch(error){
                // console.log(error.message);
                toast.error(error.message);
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }