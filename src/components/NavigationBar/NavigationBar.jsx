
function NavigationBar() {
    return (
        <>
            <nav className="bg-black p-2 text-white flex items-center justify-between">
                <h2 className=" font-sans font-light text-4xl pr-12">DHTFashion</h2>
                <div className="text-lg font-normal flex flex-1 items-center justify-end">
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-10 lg:gap-40">
                        <span className="hover:cursor-pointer  ">Home</span>
                        <span className="hover:cursor-pointer  ">Products</span>
                        <span className="hover:cursor-pointer  ">About</span>
                        <img src="/cart-icon.jpg" alt="Shopping cart icon" className="w-16" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;