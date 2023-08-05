import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch } from "react-redux";
import { incrementCount } from "../../redux-slices/cartCountSlice";

function Card({ img, price, title }) {
    const dispatch = useDispatch();
    return (
        <div className="h-3/4 px-8 pt-2 shadow-md flex flex-col items-center bg-slate-50">
            <img src={img} alt="Product Image" className="h-1/2 w-full rounded-xl" />
            <h3 className="font-bold text-lg pt-8">{title}
            </h3>
            <h2 className="font-bold pt-4 text-3xl">$ {price}</h2>
            <button onClick={() => dispatch(incrementCount())} type="button" className="bg-green-500 mt-8 p-4 rounded-xl hover:shadow-xl hover:shadow-green-300 text-white">Add To Cart</button>
        </div>
    );
}

Card.propTypes = {
    img: propTypes.string,
    price: propTypes.string,
    title: propTypes.string,

}

export default Card;