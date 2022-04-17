import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "reducers/wishlist-reducer";

const defaultWishlistValue = { wishlistItems: [] };
const WishlistContext = createContext(defaultWishlistValue);

function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    defaultWishlistValue
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
