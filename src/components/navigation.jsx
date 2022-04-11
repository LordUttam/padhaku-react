export default function Navigation() {
  return (
    <header className="header--std">
      <nav className="nav--std flex__wrap--wrap">
        <ul className="header__list--align-start">
          <li className="header__title">
            <a href="./index.html">Padhaku</a>
          </li>
        </ul>
        <div className="search__container flex items--center justify--center">
          <div className="input__container flex--inline">
            <input
              type="text"
              className="input"
              placeholder="Search Here"
            ></input>
          </div>
          <button className="search__btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <ul className="header__list--align-end">
          <li className="color--primary header__btn m--x-0-5">
            <a href="./pages/login.html" className="p--x-1">
              Login
            </a>
          </li>
          <li className="header__btn m--x-0-5">
            <a href="./pages/wishlist.html" className="p--x-1">
              <i className="bx bxs-heart"></i>Wishlist
            </a>
          </li>
          <li className="header__btn m--x-0-5">
            <a href="./pages/cart.html" className="p--x-1">
              <i className="bx bxs-cart"></i>Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
