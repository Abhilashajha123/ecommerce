import { ActionTypes } from "../constants/action-types"
export const additem=(products)=>{
    return{
        type:ActionTypes.ADDITEM,
        payload:products
    }
}

export const delitem=(product)=>{
    return{
        type:ActionTypes.DELITEM,
        payload:product
    }
}