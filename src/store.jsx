import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from './redux-slices/cartCountSlice';

const store = configureStore({
    reducer: {
        cartCount: cartCountReducer,
    }
});

export default store;