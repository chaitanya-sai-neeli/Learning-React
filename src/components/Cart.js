import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <div>
        <ItemList itemData={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
