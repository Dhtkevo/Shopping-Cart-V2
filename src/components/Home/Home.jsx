import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Outlet />
            <div className="text-white bg-[url('/main4.jpg')] bg-cover w-full h-screen flex flex-col items-center">
                <div className="flex flex-col w-6/12 p-12 gap-4 items-center">
                    <h1 className="text-6xl text-center">Welcome to DHTFashion!</h1>
                    <p className="mb-16 text-center text-lg font-medium invisible absolute md:visible md:static">DHTFashion is your one-stop destination for fashion-forward clothing and exquisite jewelry for both men and women. Step into a world of endless possibilities and let us redefine your shopping journey.</p>
                    <Link to="/products"><button className="bg-gray-600 text-lg w-28 px-2 py-1 rounded-lg shadow-md hover:shadow-slate-400" type="button">Shop Now</button></Link>
                </div>
            </div >
        </>
    );
}

export default Home;