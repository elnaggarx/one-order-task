import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    productsNumber:0,
    totalPrice:0
}
export  const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if(!state.products.find((product)=>product.id===action.payload.id)){
                    state.products.push(action.payload)
                    state.productsNumber++;
                    state.totalPrice+=Math.ceil(action.payload.price);
            }
            else{
                alert("Sir , you have already added this item to the cart")
            }
        },
        removeFromCart:(state,action)=>{
            state.products = state.products.filter((product)=>product.id!==action.payload.id);
            state.productsNumber--;
            state.totalPrice -=Math.ceil(action.payload.price);
        },
        clearCart:(state)=>{
            state.products = [];
            state.productsNumber=0;
            state.totalPrice = 0;
        },
        handleIncQuantity:(state,action)=>{
            state.totalPrice += Math.ceil(action.payload.price); 
        }
        ,handleDecQuantity:(state,action)=>{
            state.totalPrice -= Math.ceil(action.payload.price); 
        }
        
    }
})
export const {addToCart,removeFromCart,clearCart,handleIncQuantity,handleDecQuantity}=cartSlice.actions;
export default cartSlice.reducer;