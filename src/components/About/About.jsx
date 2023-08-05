import { NavLink, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <Outlet />
            <div className="h-full font-medium text-3xl flex flex-col justify-center items-center gap-6 bg-slate-200">
                <h2>This is a fictional store, none of this is real!</h2>
                <h2>Product information was fetched from Fake store api</h2>
                <h2>Images used in this fictional site were obtained from Unsplash</h2>
                <h2>My GitHub: <NavLink to="https://github.com/Dhtkevo" className="underline hover:text-blue-300">Click Here!</NavLink></h2>
            </div>
        </>
    );
};

export default About;