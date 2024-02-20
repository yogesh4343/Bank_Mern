import { configureStore } from "@reduxjs/toolkit";
import UserDetailSlice from "./Slice/UserDetailSlice";
import UserSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
      UserSlice : UserSlice,
      UserDetailSlice : UserDetailSlice
    },
  });
  
  export default store;