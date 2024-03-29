import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg font-bold"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h2 className="text-xl mt-6 font-medium">
          Your cart is empty, Add some items to the cart 🛒.
        </h2>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} fromcart={true} />
      </div>
    </div>
  );
};

export default Cart;
