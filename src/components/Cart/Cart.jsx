import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Cart() {
    const count = useSelector(state => state.cartCount.value);

    return (
        <>
            <Outlet />
            <div className='h-full w-full flex flex-col items-center bg-slate-300'>

                <div className="flex flex-col items-center justify-center w-1/2 h-1/2 mt-8 rounded-xl shadow-sm shadow-black">
                    <h2 className="font-medium text-3xl">Nothing in your cart! Click below to shop!</h2>
                </div>
            </div>
        </>
    );
}

export default Cart;