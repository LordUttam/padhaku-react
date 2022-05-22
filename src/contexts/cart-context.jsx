import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "reducers/cart-reducer";
const defaultCartValue = { cartItems: [] };
const CartContext = createContext(defaultCartValue);

function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartValue);
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cartDispatch({ type: "SET_CART", payload: cart || [] });
  }, []);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
