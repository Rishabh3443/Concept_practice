import { createSlice } from "@reduxjs/toolkit"


const Auth = createSlice({
  
     name:"auth",
     initialState:{
        user:null,
        
        isAuthenticated: false,
     },
     

     reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser:()=>{
            state.user = null;
            state.isAuthenticated = false;
        }
     }



});

export const {addUser,removeUser} = Auth.actions;

export default Auth.reducer;