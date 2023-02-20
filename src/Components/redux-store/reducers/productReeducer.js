import { actionType } from "../constants/actionTypes"

const initialState = {
    products :[]
}


export const productReducer =(state , {type , payload}) =>{
    switch(type){
        case (actionType.SET_PRODUCT):
            return state

        default:
            break;
    }
}