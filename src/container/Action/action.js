import { ADD_CART } from "../storeconstant";


export const addtoCart = (data)=>{
    console.warn("action",data);
    return {
        type:ADD_CART,
        data:data
    }
}