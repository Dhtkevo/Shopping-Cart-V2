

const Home = () => {
    return (
        <div className="text-white bg-[url('/main4.jpg')] bg-cover w-full h-full flex flex-col items-center">
            <div className="flex flex-col w-6/12 p-12 gap-4 items-center">
                <h1 className="text-6xl">Welcome to DHTFashion!</h1>
                <p className="text-lg font-medium invisible absolute md:visible md:static">DHTFashion is your one-stop destination for fashion-forward clothing and exquisite jewelry for both men and women. Step into a world of endless possibilities and let us redefine your shopping journey.</p>
                <button className="bg-gray-600 text-lg w-28 px-2 py-1 rounded-lg mt-16 shadow-md hover:shadow-slate-400" type="button">Shop Now</button>
            </div>
        </div >
    );
}

export default Home;