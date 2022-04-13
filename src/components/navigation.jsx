import { Link } from "react-router-dom";

export default function Navigation() {
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
            <Link to="/login" className="p--x-1">
              Login
            </Link>
          </li>
          <li className="header__btn m--x-0-5">
            <Link to="/wishlist" className="p--x-1">
              <i className="bx bxs-heart"></i>Wishlist
            </Link>
          </li>
          <li className="header__btn m--x-0-5">
            <Link to="/cart" className="p--x-1">
              <i className="bx bxs-cart"></i>Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
