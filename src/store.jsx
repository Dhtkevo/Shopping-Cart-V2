import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from './redux-slices/cartCountSlice';
import cartProductReducer from './redux-slices/cartProductSlice';
import cartSliceReducer from './redux-slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        cartCount: cartCountReducer,
        cartProducts: cartProductReducer,
    }
});

export default store;