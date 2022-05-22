import { Navigation, Footer } from "components";
import { useNavigate } from "react-router-dom";
import { useProducts } from "contexts/product-context";

export default function NotFound() {
  const navigate = useNavigate();
  const { dispatch } = useProducts();

  return (
    <>
      <Navigation />
      <main className="flex flex__dir--col wishlist">
        <section className="flex flex__dir--col items--center justify--center m--auto p--x-2 p--y-2 wishlist--empty">
          <span className="text--center">
            <p className="text--lg text--bold">404</p>
            <p className="text--md">
              The page you are looking for was not found!
            </p>
          </span>

          <div className="flex">
            <button
              className="btn btn--outline p--1 m--1 shadow-hover--none"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <button
              className="btn btn--primary p--1 m--1 shadow-hover--none"
              onClick={() => {
                dispatch({ type: "CLEAR_ALL" });
                navigate("/products");
              }}
            >
              Shop now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
