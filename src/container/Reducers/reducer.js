// import { ADD_CART } from "../storeconstant";
const initialstate ={
    cardData:{
        price:0,
        quantity:0
    }
}

const reducer = (state=initialstate ,action)=>{
    switch(action.type){
        case "ADD_CART" :
            return {
                ...state,
                cardData:{
                    price:state.cardData.price + action.data.price,
                    quantity:state.cardData.quantity+action.data.quantity
                 }
            }
            break;
            default :
            return state;
    }
}

export default reducer;