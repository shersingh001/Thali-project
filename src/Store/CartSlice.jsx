import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState: { item: [], quantityCount:0 },
    reducers:{
        addCartData(state,action){
            const newItem = action.payload;
            const existingItem = state.item.find((item) => item.id === newItem.id);
            state.quantityCount++;
            if(!existingItem){
                state.item.push({
                    id: newItem.id,
                    price: newItem.price,
                    Name: newItem.Name,
                    img: newItem.img,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeCartData(state,action){
            const id = action.payload;
            const existingItem = state.item.find((item) => item.id === id);
            state.quantityCount--;
            if(existingItem.quantity === 1){
                state.item = state.item.filter((item) => item.id !== id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },

        allCartDataRemove(state){
            state.quantityCount = 0;
            state.item = []
        }
    }
})

export const cartSliceAction = cartSlice.actions;

export default cartSlice;