const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let cart = [...cartState.cartItems, { ...action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...cartState,
        cartItems: cart,
      };
    }
    case "REMOVE_ITEM": {
      let cart = cartState.cartItems.filter(
        (product) => product._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...cartState,
        cartItems: cart,
      };
    }
    case "INCREMENT_QTY": {
      let cart = cartState.cartItems.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...cartState,
        cartItems: cart,
      };
    }
    case "DECREMENT_QTY": {
      let cart = cartState.cartItems.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...cartState,
        cartItems: cart,
      };
    }
    case "SET_CART":
      return {
        ...cartState,
        cartItems: [...action.payload],
      };

    case "CLEAR_CART": {
      localStorage.setItem("cart", JSON.stringify([]));
      return {
        ...cartState,
        cartItems: [],
      };
    }

    default:
      return { ...cartState };
  }
};

const summaryGenerator = (cartItems) => {
  const priceWithoutDiscount = cartItems.reduce(
    (origPrice, product) => origPrice + product.origPrice * product.quantity,
    0
  );

  const priceWithDiscount = cartItems.reduce(
    (price, product) => price + product.price * product.quantity,
    0
  );

  return {
    priceWithDiscount: priceWithDiscount,
    priceWithoutDiscount: priceWithoutDiscount,
  };
};

export { cartReducer, summaryGenerator };
