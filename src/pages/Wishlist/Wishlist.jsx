import "./wishlist.css";
import { Navigation, Footer } from "components";
import { useWishlist } from "contexts/wishlist-context";
import { useCart } from "contexts/cart-context";
import { useAuth } from "contexts/auth-context";
import { WishlistCard } from "components/cards/cards";
import { useNavigate } from "react-router-dom";
import { useProducts } from "contexts/product-context";

import {
  checkProductIn,
  postCartApi,
  updateCartApi,
  deleteFromWishlistApi,
} from "operations";

export default function Wishlist() {
  const navigate = useNavigate();
  const { dispatch } = useProducts();
  const { authData } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const addToCart = async (productDetails) => {
    if (authData.isAuthenticated) {
      try {
        await postCartApi(productDetails, authData.token);
        cartDispatch({ type: "ADD_ITEM", payload: productDetails });
      } catch (errorMsg) {
        console.error(errorMsg);
      }
    } else {
      navigate("/login");
    }
  };

  const updateCartHandler = async (productDetails, actionType) => {
    try {
      await updateCartApi(productDetails._id, actionType, authData.token);
      cartDispatch({ type: "INCREMENT_QTY", payload: productDetails });
    } catch (errorMsg) {
      console.error(errorMsg);
    }
  };

  const wishlistToCart = (productDetails) => {
    const productInCart = checkProductIn(cartState.cartItems, productDetails);
    if (productInCart) {
      updateCartHandler(productDetails, "increment");
    } else {
      addToCart(productDetails);
    }
  };

  const removeFromWishlist = async (productDetails) => {
    try {
      await deleteFromWishlistApi(productDetails._id, authData.token);
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: productDetails,
      });
    } catch (errorMsg) {
      console.error(errorMsg);
    }
  };

  const wishlist = Array.from(new Set(wishlistState.wishlistItems));

  return (
    <>
      <Navigation />
      <main className="flex flex__dir--col wishlist">
        <h2 className="h--2 wishlist__heading m__t-1 m__b-0">Wishlist</h2>

        {wishlistState.wishlistItems.length === 0 ? (
          <section className="flex flex__dir--col items--center justify--center m--auto p--x-2 p--y-2 wishlist--empty">
            <span className="text--center">
              <p className="text--lg text--bold">Your wishlist is empty </p>
              <p className="text--md">Start adding items to wishlist now!</p>
            </span>
            <button
              className="btn btn--primary p--1 m--1 shadow-hover--none"
              onClick={() => {
                dispatch({ type: "CLEAR_ALL" });
                navigate("/products");
              }}
            >
              Shop now
            </button>
          </section>
        ) : (
          <section className="flex flex__wrap--wrap justify--start items--start p--x-2 p--y-2">
            {wishlist.map((product) => (
              <WishlistCard
                productDetails={product}
                key={product._id}
                wishlistToCart={wishlistToCart}
                removeFromWishlist={removeFromWishlist}
              />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
