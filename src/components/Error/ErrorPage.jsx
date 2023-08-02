import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-black flex flex-col items-center gap-20 h-full justify-center text-5xl font-bold text-slate-400">
            <h1>Sorry, this page does not exist!</h1>
            <Link to="/" className="shadow-sm  hover:text-white">Click here to return home</Link>
        </div>
    );
}

export default ErrorPage;