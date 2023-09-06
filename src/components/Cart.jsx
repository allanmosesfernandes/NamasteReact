import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cart = useSelector((store) => store.cart);
  const { items } = cart;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <button type="button" onClick={handleClearCart}>
        Clear cart
      </button>
    </div>
  );
}

export default Cart;
