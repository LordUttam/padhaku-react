import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "reducers/cart-reducer";
import { ProductProvider } from "./product-context";

const defaultCartValue = { cartItems: [] };
const CartContext = createContext(defaultCartValue);

function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartValue);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
