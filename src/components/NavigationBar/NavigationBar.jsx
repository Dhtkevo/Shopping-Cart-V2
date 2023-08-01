
function NavigationBar() {
    return (
        <>
            <nav className="bg-black p-2 text-white flex items-center justify-between">
                <h2 className=" font-sans font-light text-4xl">DHTFashion</h2>
                <div className="ml-96 text-lg font-normal flex gap-40">
                    <span className="hover:cursor-pointer">Home</span>
                    <span className="hover:cursor-pointer">Products</span>
                    <span className="hover:cursor-pointer">About</span>
                </div>
                <img src="/cart-icon.jpg" alt="Shopping cart icon" className="w-16" />
            </nav>
        </>
    );
}

export default NavigationBar;