import "./cart.css";
import { Navigation, Footer } from "components";
import { useCart } from "contexts/cart-context";
import { CartCard } from "components/cards/cards";
import { useNavigate } from "react-router-dom";
import { summaryGenerator } from "reducers/cart-reducer";

export default function Cart() {
  const { cartState } = useCart();
  const navigate = useNavigate();
  const { priceWithDiscount, priceWithoutDiscount } = summaryGenerator(
    cartState.cartItems
  );
  const deliveryCharges = priceWithDiscount < 500 ? 100 : 0;

  return (
    <>
      <Navigation />
      <main className="flex justify--center items--center flex__wrap--wrap cart">
        {cartState.cartItems.length > 0 ? (
          <section className="cart__items flex flex__dir--col items--center justify--space-around p--x-2 p--y-2">
            <h2 className="h--2 cart__heading m__t-1 m__b-0">My Cart</h2>
            {cartState.cartItems.map((product) => (
              <CartCard productDetails={product} key={product._id} />
            ))}
          </section>
        ) : (
          <section className="cart__items flex flex__dir--col items--center justify--center p--x-2 p--y-2">
            <span className="text-center">
              <p className="text--lg text--bold">Your cart is empty :(</p>
              <p className="text--md">Add items to cart now!</p>
            </span>
            <button
              className="btn btn--primary p--1 shadow-hover--none"
              onClick={() => navigate("/products")}
            >
              Shop now
            </button>
          </section>
        )}
        <section className="price-section p--x-2 p--y-2 flex justify--start items--start">
          <div className="price-modal card flex flex__dir--col">
            <div className="cart-details p--x-2">
              <p className="text--md text--bold">Order Summary</p>

              <div className="flex justify--between items--center">
                <p className="text">Price ({cartState.cartItems.length})</p>
                <p>₹{priceWithoutDiscount}</p>
              </div>
              <div className="flex justify--between items--center">
                <p className="text">Price for you</p>
                <p className="text--bold">₹{priceWithDiscount}</p>
              </div>
              {deliveryCharges ? (
                <>
                  <div className="flex justify--between items--center">
                    <p className="text">Delivery Charges</p>
                    <p>₹100</p>
                  </div>
                  <p className="text">
                    Add Items worth atleast ₹{500 - priceWithDiscount} to get
                    free delivery
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify--between items--center">
                    <p className="text">Delivery Charges</p>
                    <p className="text--strike  text--sbold">₹100</p>
                  </div>
                  <p className="text ">
                    You are eligible to get free delivery!
                  </p>
                </>
              )}

              <div className="text--bold flex justify--between">
                <span className="text--md">Total Amount</span>
                {priceWithDiscount > 0 ? (
                  <span className="text--md">
                    ₹{priceWithDiscount + deliveryCharges}
                  </span>
                ) : (
                  <span className="text--md">0</span>
                )}
              </div>
            </div>
            <button className="btn btn--primary p--y-1">Place order</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
