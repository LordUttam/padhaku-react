const wishlistReducer = (wishlistState, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    {
      let wishlist = [...wishlistState.wishlistItems, { ...action.payload }];
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      return {
        ...wishlistState,
        wishlistItems: wishlist,
      };
    }
  }
  if (action.type === "REMOVE_FROM_WISHLIST") {
    {
      let wishlist = wishlistState.wishlistItems.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      return {
        ...wishlistState,
        wishlistItems: wishlist,
      };
    }
  }
  if (action.type === "SET_WISHLIST") {
    return {
      ...wishlistState,
      wishlistItems: [...action.payload],
    };
  }
  if (action.type === "CLEAR_WISHLIST") {
    localStorage.setItem("wishlist", JSON.stringify([]));
    return {
      ...wishlistState,
      wishlistItems: [],
    };
  }
};

export { wishlistReducer };
