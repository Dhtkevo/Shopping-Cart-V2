import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const cartProductSlice = createSlice({
    name: "cartProduct",
    initialState,
    reducers: {
        addItem: (state, action) => {

            const item = state.products.find((product) => product.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.products.push(action.payload);

            }
        },
        reduceQuantity: (state, action) => {
            const item = state.products.find((product) => product.id === action.payload.id);

            if (item.quantity === 1) {
                state.products.splice(
                    state.products.findIndex((item) => item.id === action.payload.id),
                    1
                );
            }
            if (item) item.quantity -= 1;

        },
        deleteItem: (state, action) => {
            state.products.splice(
                state.products.findIndex((item) => item.id === action.payload.id),
                1
            );
        },
        clearCart: (state) => {
            state.products = [];
        }
    }
});

export const cartQuantitySelector = (state) => state.cartProducts.products.reduce(
    (quantity, item) => quantity + item.quantity,
    0
);
export const cartTotalSelector = (state) => state.cartProducts.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

export const { addItem, deleteItem, reduceQuantity, clearCart } = cartProductSlice.actions;
export default cartProductSlice.reducer;

