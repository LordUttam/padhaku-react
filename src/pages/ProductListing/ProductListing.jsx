import "./product-listing.css";
import "styles/main.css";

import { Navigation, Sidebar, SidebarMobile, Footer } from "components";
import { productData } from "data/products";
import { ProductCard } from "components/cards/cards";

export default function Products() {
  return (
    <>
      <Navigation />
      <main>
        <div className="flex p--y-2 justify--center">
          <Sidebar />
          <SidebarMobile />
          <section className="products flex flex__wrap--wrap p--x-2 p--y-2">
            {productData.map((data) => (
              <ProductCard
                prodImg={data.prodImg}
                bookTitle={data.bookTitle}
                author={data.author}
                price={data.price}
                oldPrice={data.oldPrice}
                key={data.id}
              />
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
