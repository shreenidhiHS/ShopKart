import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReeducer";

const reducer = combineReducers({
    allProducts: productReducer,
})