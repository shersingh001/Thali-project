import {configureStore} from '@reduxjs/toolkit';
import FoodItemDataSlice from './FoodItemData';
import cartSlice from './CartSlice';
// import ServiceSlice from './ServiceSlice';

const store = configureStore({
    reducer:{foodItem: FoodItemDataSlice.reducer, cart: cartSlice.reducer}
})

export default store;