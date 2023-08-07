import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-slices/cartProductSlice";

function Card({ product }) {

    function handleClick() {
        product.quantity = 1;
        dispatch(addItem(product));
    }


    const dispatch = useDispatch();
    return (
        <div className="h-3/4 px-8 pt-2 shadow-md flex flex-col items-center bg-slate-50">
            <img src={product.image} alt="Product Image" className="h-1/2 w-full rounded-xl" />
            <h3 className="font-bold text-lg pt-8">{product.title}
            </h3>
            <h2 className="font-bold pt-4 text-3xl">$ {product.price.toFixed(2)}</h2>
            <button onClick={handleClick} type="button" className="bg-green-500 mt-8 p-4 rounded-xl hover:shadow-xl hover:shadow-green-300 text-white">Add To Cart</button>
        </div>
    );
}

Card.propTypes = {
    product: propTypes.object,
    img: propTypes.string,
    price: propTypes.string,
    title: propTypes.string,
    id: propTypes.number,
    quantity: propTypes.number,

}

export default Card;