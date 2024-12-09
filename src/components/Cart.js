import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart, removeItem } from "../redux/cartSlice";
import { EMPTYCART_IMAGE } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(emptyCart());
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-2">
      <div className="relative w-6/12 mx-auto">
        <h1 className="text-2xl font-semibold">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="absolute right-10 top-0 px-3.5 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md transition ease-in-out duration-200 rounded-md"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length !== 0 && (
          <button
            className="absolute left-0 top-0 px-3.5 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md transition ease-in-out duration-200 rounded-md"
            onClick={handleRemoveItem}
          >
            Remove Item
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <div className="w-6/12 mx-auto my-4 text-center">
          <img
            src={EMPTYCART_IMAGE}
            className="h-72 w-72 mx-auto"
            alt="Empty Cart"
          />
          <p className="m-4 text-zinc-600 font-bold">Your cart is empty!</p>
          <p className="text-gray-500 text-sm">
            You can go to the homepage to view more restaurants
          </p>
        </div>
      ) : (
        <div className="w-6/12 m-auto">
          <ItemList itemData={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
