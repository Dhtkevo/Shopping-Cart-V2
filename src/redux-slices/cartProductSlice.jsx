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
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);

            }
            // reducer(state, action) {
            //     state.products.push(action.payload)
            // },
            // prepare(id, img, title, price, quantity) {
            //     return {
            //         payload: {
            //             id,
            //             img,
            //             title,
            //             price,
            //             quantity,
            //         }
            //     }
            // }
        }
    },
    deleteItem: {
        reducer(state, action) {
            state.products = state.products.filter((prod) => {
                prod.id !== action.payload;
            })
        },
        prepare(id) {
            return {
                payload: {
                    id
                }
            }
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

export const { addItem, removeItem } = cartProductSlice.actions;
export default cartProductSlice.reducer;

