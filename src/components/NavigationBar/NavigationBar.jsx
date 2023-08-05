import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    const count = useSelector((state) => state.cartCount.value);

    return (
        <>
            <nav className="bg-black p-2 text-white flex items-center justify-between">
                <Link to="/">
                    <h2 className=" font-sans font-light text-4xl pr-12">DHTFashion</h2>
                </Link>
                <div className="text-lg font-normal flex flex-1 items-center justify-end">
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-10 lg:gap-40">
                        <Link to="/" ><span className="hover:cursor-pointer  ">Home</span></Link>
                        <Link to="/products"><span className="hover:cursor-pointer  ">Products</span></Link>
                        <Link to="/about"><span className="hover:cursor-pointer  ">About</span></Link>
                        <div className="flex relative">
                            <NavLink to="/checkout"><img src="/cart-icon.jpg" alt="Shopping cart icon" className="w-16" /></NavLink>
                            {count > 0 && <div className="bg-blue-500 absolute left-6 -top-1 rounded-2xl w-6 h-6 flex justify-center items-center">{count}</div>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;