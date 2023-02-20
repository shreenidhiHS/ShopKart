import { actionType } from "../constants/actionTypes";

export const setProduct = (products) =>{
    return {
        type: actionType.SET_PRODUCT ,
        payload: products, 
    }
}