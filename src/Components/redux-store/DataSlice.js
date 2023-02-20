import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "data",
    initialState:{
        data:[],
        singleProd:[]
    },
    reducers:{
        addData(state,action){
            const apiData = action.payload;
            state.data = apiData;
        },
        addproduct(state,action){
            const newData = action.payload;
            state.data.push(newData)
        },
        updateProduct(state, action){
            const update = action.payload;
            const id = parseInt(update.id);
            const Index = state.data.findIndex((obj) => obj.id === id);
            const data = update.data;
            state.data[Index] = data;
            state.data[Index].id = id;
        },
        removeProduct(state,action){
            const arr = state.data;
            const id = action.payload;
            console.log(typeof(id))
            const Id = parseInt(id)
            const Index = state.data.findIndex((obj) => obj.id === Id);
            console.log(Index)
            state.data.splice(Index,1);
            
        },
        getSingle(state , action){
            const id = action.payload;
            const Id = parseInt(id);
            const Index = state.data.findIndex((obj) => obj.id === Id);
            state.singleProd = state.data[Index];
            
        }  
    }
});

export const dataActions = dataSlice.actions;
export default dataSlice