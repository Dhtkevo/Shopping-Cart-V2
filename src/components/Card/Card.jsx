
function Card() {
    return (
        <div className="h-3/4 px-8 pt-2 shadow-md flex flex-col items-center bg-slate-50">
            <img src="/main1.jpg" alt="Product Image" className="h-1/2 w-full rounded-xl" />
            <h3 className="font-bold text-lg pt-8">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h3>
            <h2 className="font-bold pt-4 text-3xl">$ 109.95</h2>
            <button type="button" className="bg-green-500 mt-8 p-4 rounded-xl hover:shadow-xl hover:shadow-green-300 text-white">Add To Cart</button>
        </div>
    );
}

export default Card;