import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./cartItem";
import { useEffect, useState } from "react";
import { cartQuantitySelector } from "../../redux-slices/cartProductSlice";
import { cartTotalSelector } from "../../redux-slices/cartProductSlice";



function Cart() {
    const cartQuantity = useSelector(cartQuantitySelector);
    const cartTotal = useSelector(cartTotalSelector);

    const count = useSelector(state => state.cartCount.value);
    const cartProds = useSelector(state => state.cartProducts.products)



    return (
        <>
            <Outlet />
            <div className='pt-6 h-full w-full flex justify-around bg-slate-200 '>

                {count > 99 && <div className="flex flex-col items-center justify-center w-1/2 h-1/2 mt-8 rounded-xl shadow-sm shadow-black gap-28">
                    <h2 className="font-medium text-3xl">Nothing in your cart! Click below to shop!</h2>
                    <NavLink to="/products">
                        <button type="button" className="bg-black text-white p-2 rounded-xl hover:shadow-sm hover:shadow-black">Shop Now</button>
                    </NavLink>
                </div>}
                <div className="w-1/2 h-1/2 pt-24 flex flex-col gap-16">
                    <div className="flex justify-between font-bold text-2xl">
                        <h2 className="inline-block">Your shopping cart</h2>
                        <span>{cartQuantity} items</span>
                    </div>
                    <div className="h-1/2 flex flex-col gap-4">
                        {cartProds.map(prod =>
                            <CartItem key={prod.id} img={prod.image} price={prod.price.toFixed(2)} title={prod.title} quantity={prod.quantity} product={prod} />
                        )}
                    </div>
                </div>

                <div className="shadow-lg shadow-slate-200 flex flex-col justify-around items-center w-1/3 h-1/2 gap-14 bg-white rounded-xl">
                    <div className="flex justify-around w-full gap-28">
                        <h2 className="font-medium text-3xl">Estimated Total</h2>
                        <span className="font-medium text-2xl ">$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <button onClick={() => console.log(cartQuantity)} className="bg-green-400 text-white p-2 rounded-xl hover:shadow-md hover:shadow-green-300e" type="button">Proceed to checkout</button>
                    <img src="/payment.png" alt="payment logo" className="w-1/2 h-1/3" />
                </div>
            </div>
        </>
    );
}

export default Cart;