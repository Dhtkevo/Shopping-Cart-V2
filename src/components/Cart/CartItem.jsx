import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { reduceQuantity, deleteItem, addItem } from "../../redux-slices/cartProductSlice";
import { useDispatch } from "react-redux";



CartItem.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
    quantity: propTypes.number,
    product: propTypes.object,
}

function CartItem({ title, img, quantity, product }) {
    const itemTotal = useSelector((state) => {
        let index = state.cartProducts.products.findIndex((item) => item.id === product.id);
        let itemQuantity = state.cartProducts.products[index].quantity;
        let itemPrice = state.cartProducts.products[index].price;

        return itemQuantity * itemPrice;
    });

    const dispatch = useDispatch();

    return (
        <div className="p-2 flex justify-between px-10 bg-white h-full rounded-xl">
            <img src={img} alt="clothes image" className="h-full w-28" />
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="font-medium text-lg min-w-fit">{title}</h2>
                <ButtonGroup size="small" variant="text" aria-label="outlined primary button group">
                    <Button onClick={() => dispatch(reduceQuantity(product))} >-</Button>
                    <Button disabled>{quantity}</Button>
                    <Button onClick={() => dispatch(addItem(product))} >+</Button>
                </ButtonGroup>
            </div>
            <div className="flex items-end gap-10">
                <span className="text-lg font-medium min-w-fit">$ {itemTotal.toFixed(2)}</span>
                <button onClick={() => dispatch(deleteItem(product))} className="text-red-500 font-medium hover:bg-red-100 rounded-xl px-2">Remove X</button>
            </div>
        </div>
    );
}

export default CartItem;