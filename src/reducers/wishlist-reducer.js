const wishlistReducer = (wishlistState, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    return {
      ...wishlistState,
      wishlistItems: [...wishlistState.wishlistItems, { ...action.payload }],
    };
  }
  if (action.type === "REMOVE_FROM_WISHLIST") {
    return {
      ...wishlistState,
      wishlistItems: wishlistState.wishlistItems.filter(
        (product) => product._id !== action.payload._id
      ),
    };
  }
};

export { wishlistReducer };
