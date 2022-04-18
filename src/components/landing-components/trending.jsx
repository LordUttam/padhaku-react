import { useState, useEffect } from "react";
import axios from "axios";
import { TrendingCard } from "components/cards/cards";

export default function Trending() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products.slice(0, 6));
    })();
  }, []);

  return (
    <>
      <h2 className="h--2 trending__heading m__t-1 m__b-0">Trending</h2>
      <section className="trending flex justify--center p--x-2 p--y-2">
        {products.map((product) => (
          <TrendingCard productDetails={product} key={product._id} />
        ))}
      </section>
    </>
  );
}
