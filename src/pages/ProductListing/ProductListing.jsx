import "./product-listing.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation, Sidebar, SidebarMobile, Footer } from "components";
import { ProductCard } from "components/cards/cards";
import {
  sorter,
  stockFilter,
  speedFilter,
  priceFilter,
  categoryFilter,
  coverTypeFilter,
  ratingFilter,
  searchFilter,
} from "operations";
import { useProducts } from "contexts/product-context";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { state } = useProducts();

  const searchedItems = searchFilter(products, state.search);
  const includeOutStockProds = stockFilter(
    searchedItems,
    state.includeOutStock
  );
  const fastDelivery = speedFilter(includeOutStockProds, state.shouldBeFast);
  const sortedData = sorter(fastDelivery, state.sortBy);
  const priceFilteredData = priceFilter(sortedData, state.price);
  const coverTypeFilteredData = coverTypeFilter(
    priceFilteredData,
    state.covertype
  );
  const categoryFilteredData = categoryFilter(
    coverTypeFilteredData,
    state.categories
  );
  const ratingFilteredData = ratingFilter(categoryFilteredData, state.rating);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="flex p--y-2 justify--center">
          <Sidebar />
          <SidebarMobile />
          <section className="products flex flex__wrap--wrap p--x-2 p--y-2">
            {ratingFilteredData.map((product) => (
              <ProductCard productDetails={product} key={product._id} />
            ))}
          </section>
        </div>

        <button className="filters__btn btn--float">
          <i className="fa fa-bars"></i>
        </button>
      </main>
      <Footer />
    </>
  );
}

export { Products };
