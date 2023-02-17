import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        user : {}
    },
    reducers:{
        addUser(state ,action){
            state.user = action.payload
        }
    }
})