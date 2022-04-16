import { ActionTypes } from "../constants/action-types";
const initialState=[]
export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.ADDITEM:
            return [...state,payload]
            break;
        case ActionTypes.DELITEM:
        return state=state.filter((x)=>{
                return x.id!==payload.id
        })
        break;
        default:
            return state;
            break;
           
    }
}