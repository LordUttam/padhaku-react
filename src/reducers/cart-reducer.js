const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...cartState,
        cartItems: [...cartState.cartItems, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_ITEM":
      return {
        ...cartState,
        cartItems: cartState.cartItems.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case "INCREMENT_QTY":
      return {
        ...cartState,
        cartItems: cartState.cartItems.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...cartState,
        cartItems: cartState.cartItems.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

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
