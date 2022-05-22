import "./navigation.css";
import { useCart } from "contexts/cart-context";
import { useWishlist } from "contexts/wishlist-context";
import { useAuth } from "contexts/auth-context";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();

  function LogoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    cartDispatch({ type: "CLEAR_CART" });
    wishlistDispatch({ type: "CLEAR_WISHLIST" });

    setAuthData((authData) => ({
      user: null,
      token: null,
      isAuthenticated: false,
    }));
    navigate("/home");
  }
  return (
    <header className="header--std">
      <nav className="nav--std flex__wrap--wrap">
        <ul className="header__list--align-start">
          <li className="header__title">
            <Link to="/home">Padhaku</Link>
          </li>
        </ul>
        <div className="search__container flex items--center justify--center">
          <div className="input__container flex--inline">
            <input type="text" className="input" placeholder="Search Here" />
          </div>
          <button className="search__btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <ul className="header__list--align-end">
          <li className="color--primary header__btn m--x-0-5">
            {authData.isAuthenticated ? (
              <Link to="/home" className="p--x-1" onClick={LogoutHandler}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="p--x-1">
                Login
              </Link>
            )}
          </li>
          <li className="header__btn m--x-0-5">
            <Link to="/wishlist" className="p--x-1 badge-container">
              <i className="bx bxs-heart wishlist-icon"></i>
              {wishlistState.wishlistItems.length > 0 ? (
                <span className="badge badge--small badge--top-right">
                  <span className="badge__text">
                    {wishlistState.wishlistItems.length}
                  </span>
                </span>
              ) : null}
            </Link>
          </li>
          <li className="header__btn m--x-0-5">
            <Link to="/cart" className="p--x-1">
              <i className="bx bxs-cart cart-icon"></i>
              {cartState.cartItems.length > 0 ? (
                <span className="badge badge--small badge--top-right">
                  <span className="badge__text">
                    {cartState.cartItems.length}
                  </span>
                </span>
              ) : null}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
