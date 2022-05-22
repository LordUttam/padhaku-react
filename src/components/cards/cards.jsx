import { useCart } from "contexts/cart-context";
import { useWishlist } from "contexts/wishlist-context";
import { useProducts } from "contexts/product-context";
import { useAuth } from "contexts/auth-context";
import {
  checkProductIn,
  postCartApi,
  postWishlistApi,
  deleteFromWishlistApi,
} from "operations";
import { useNavigate } from "react-router-dom";

function FeaturedCard(props) {
  const featImg = props.featImg;
  const imgAlt = props.featImgAlt;
  const cardTitle = props.cardTitle;
  const cardSubtitle = props.cardSubtitle;
  const categoryId = props.categoryId;
  const navigate = useNavigate();
  const { dispatch } = useProducts();

  const explore = () => {
    dispatch({ type: "CLEAR_ALL" });
    dispatch({ type: "CATEGORIES", payload: categoryId });
    navigate("/products");
  };

  return (
    <div className="card card--horizontal">
      <div className="card__image">
        <img src={featImg} alt={imgAlt} />
      </div>

      <h2 className="card__title h--3">{cardTitle}</h2>

      <div className="card__header">
        <h3 className="card__subtitle font--gray">{cardSubtitle}</h3>
      </div>

      <div className="card__actions m--y-0-5 p--y-1 btn__container">
        <button
          className="btn btn--primary shadow-hover--none p--y-2"
          onClick={() => {
            explore();
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}

function TrendingCard({ productDetails }) {
  const { prodImg, bookTitle, author, price, origPrice } = productDetails;
  const { cartState, cartDispatch } = useCart();
  const { authData } = useAuth();
  const navigate = useNavigate();

  const productInCart = checkProductIn(cartState.cartItems, productDetails);

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

  const buyNow = () => {
    if (!productInCart) {
      addToCart(productDetails);
    }
    navigate("/cart");
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={prodImg} alt={bookTitle} />
      </div>

      <div className="card__header">
        <h2 className="card__title">{bookTitle}</h2>
        <h3 className="card__subtitle font--gray">{author}</h3>
        <p className="card__text">
          <span className="text--strike text--gray">₹{origPrice}</span>
          <span className="text--md text--bold">₹{price}</span>
        </p>
      </div>

      <div className="card__actions p--y-1 btn__container">
        <button
          className="btn btn--primary shadow-hover--none p--y-2"
          onClick={() => buyNow()}
        >
          Buy Now
        </button>
        {productInCart ? (
          <button
            className="btn btn--outline shadow-hover--none p--y-2"
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </button>
        ) : (
          <button
            className="btn btn--outline shadow-hover--none p--y-2"
            onClick={() => addToCart(productDetails)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

function ProductCard({ productDetails }) {
  const {
    prodImg,
    bookTitle,
    author,
    price,
    origPrice,
    inStock,
    coverType,
    fastDelivery,
  } = productDetails;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { authData } = useAuth();
  const navigate = useNavigate();
  const productInWishlist = checkProductIn(
    wishlistState.wishlistItems,
    productDetails
  );
  const productInCart = checkProductIn(cartState.cartItems, productDetails);

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

  const SaveToWishlist = async (productDetails) => {
    if (authData.isAuthenticated) {
      try {
        await postWishlistApi(productDetails, authData.token);
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: productDetails,
        });
      } catch (errorMsg) {
        console.error(errorMsg);
      }
    } else {
      navigate("/wishlist");
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

  const buyNow = () => {
    if (!productInCart) {
      addToCart(productDetails);
    }
    navigate("/cart");
  };

  return (
    <div className="card__container justify--center items--center m--y-1">
      <div className="card m--0-auto">
        <div className="card__image">
          <img src={prodImg} alt={bookTitle} />
        </div>
        <div className="card__header">
          <h2 className="card__title">{bookTitle}</h2>
          <h3 className="card__subtitle font--gray">{author}</h3>
          <p className="card__text">
            <span className="text--strike text--gray">₹{origPrice}</span>
            <span className="text--md text--bold">₹{price}</span>
          </p>
          <p className="card__text covertype flex flex__wrap--wrap">
            {coverType === "Hard Cover" ? (
              <span className="special-tag text--xs text--sbold  p--0-5">
                {coverType}
              </span>
            ) : (
              <span className="bg--light text--xs p--0-5">{coverType}</span>
            )}{" "}
            {fastDelivery ? (
              <span className="special-tag border--accent text--xs text--sbold p--0-5 m--x-0-5">
                3 day delivery
              </span>
            ) : null}
          </p>
        </div>
        <div className="card__actions p--y-1 btn__container">
          <button
            className="btn btn--primary shadow-hover--none p--y-2"
            onClick={() => buyNow()}
          >
            Buy Now
          </button>
          {productInCart ? (
            <button
              className="btn btn--outline shadow-hover--none p--y-2"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="btn btn--outline shadow-hover--none p--y-2"
              onClick={() => {
                addToCart(productDetails);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
        {inStock ? null : <span className="card__overlay">Out of Stock</span>}
        {productInWishlist ? (
          <span
            className="card__heart-btn flex flex--center"
            onClick={() => removeFromWishlist(productDetails)}
          >
            <i className="bx bxs-heart"></i>
          </span>
        ) : (
          <span
            className="card__heart-btn flex flex--center"
            onClick={() => SaveToWishlist(productDetails)}
          >
            <i className="bx bx-heart"></i>
          </span>
        )}
      </div>
    </div>
  );
}

function CartCard({
  productDetails,
  decrementItemQty,
  incrementItemQty,
  saveForLater,
  removeFromCart,
}) {
  const { prodImg, bookTitle, author, price, origPrice, coverType, quantity } =
    productDetails;

  return (
    <div className="card__container justify--center items--center m--y-1">
      <div className="card card--horizontal">
        <div className="card__image flex justify--center">
          <img src={prodImg} alt={bookTitle} />
        </div>

        <div className="card__body flex flex__dir--col justify--between">
          <h2 className="card__title">{bookTitle}</h2>
          <h3 className="card__subtitle font--gray">{author}</h3>
          <h4 className="h--4 color--primary book-type p__l--1">{coverType}</h4>
          <p className="card__text text--black text--sbold">
            <span className="text--strike text--gray text--sm">
              ₹{origPrice}
            </span>
            <span className="text--md text--sbold">₹{price}</span>
          </p>
          <div className="quantity input__container--row">
            <label htmlFor="qtyInput" className="text text--bold">
              Quantity
            </label>
            <button
              className="btn btn--primary"
              onClick={() => decrementItemQty(productDetails)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn--primary"
              onClick={() => incrementItemQty(productDetails)}
            >
              +
            </button>
          </div>

          <div className="card__actions flex items--center m--0 p--0">
            <button
              className="btn btn--link text--sm text--light"
              onClick={() => saveForLater(productDetails)}
            >
              Save for Later
            </button>
            <button
              className="btn btn--link  text--xs text--light"
              onClick={() => {
                removeFromCart(productDetails._id);
              }}
            >
              Remove
            </button>
          </div>

          <span className="card__badge">30% off</span>
        </div>
      </div>
    </div>
  );
}

function WishlistCard({ productDetails, wishlistToCart, removeFromWishlist }) {
  const { prodImg, bookTitle, author, origPrice, price } = productDetails;

  return (
    <div className="card__container justify--center items--center m--y-1">
      <div className="card m--0-auto">
        <div className="card__image">
          <img src={prodImg} alt={bookTitle} />
        </div>

        <div className="card__header">
          <h2 className="card__title">{bookTitle}</h2>
          <h3 className="card__subtitle font--gray">{author}</h3>
          <p className="card__text">
            <span className="text--strike text--gray">₹{origPrice}</span>
            <span className="text--md text--bold">₹{price}</span>
          </p>
        </div>

        <div className="card__actions btn__container">
          <button
            className="btn btn--primary shadow-hover--none"
            onClick={() => wishlistToCart(productDetails)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn--outline shadow-hover--none"
            onClick={() => removeFromWishlist(productDetails)}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export { FeaturedCard, TrendingCard, ProductCard, WishlistCard, CartCard };
