import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const cartCountSlice = createSlice({
    name: "cartCount",
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.value += 1;
        },
        decrementCount: (state) => {
            state.value -= 1;
        },
    }
});

export const { incrementCount, decrementCount } = cartCountSlice.actions;
export default cartCountSlice.reducer;