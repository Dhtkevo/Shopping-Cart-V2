import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { cartQuantitySelector, cartTotalSelector } from '../../redux-slices/cartProductSlice';



CartItem.propTypes = {
    title: propTypes.string,
    price: propTypes.number,
    img: propTypes.string,
}

function CartItem({ title, price, img, quantity }) {

    const cartProds = useSelector(state => state.cartProducts.products);

    return (
        <div className="p-2 flex justify-between px-10 bg-white h-full rounded-xl">
            <img src={img} alt="clothes image" className="h-full w-28" />
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="font-medium text-lg min-w-fit">{title}</h2>
                <ButtonGroup size="small" variant="text" aria-label="outlined primary button group">
                    <Button >-</Button>
                    <Button disabled>{quantity}</Button>
                    <Button>+</Button>
                </ButtonGroup>
            </div>
            <div className="flex items-end gap-10">
                <span className="text-lg font-medium min-w-fit">$ {price}</span>
                <button onClick={() => console.log(cartProds)} className="text-red-500 font-medium hover:bg-red-100 rounded-xl px-2">Remove X</button>
            </div>
        </div>
    );
}

export default CartItem;