import { useProducts } from "contexts/product-context";

function SortComponent() {
  const {
    state: { sortBy },
    dispatch,
  } = useProducts();
  return (
    <div className="flex flex__dir--col">
      <h4 className="heading h--4 m__t-1">Sort By</h4>
      <ul className="list--stacked items--start p--0">
        <li>
          <input
            id="htlBtn"
            type="radio"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          <label htmlFor="htlBtn">High to Low</label>
        </li>
        <li>
          <input
            id="lthBtn"
            type="radio"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />

          <label htmlFor="lthBtn">Low to High</label>
        </li>
      </ul>
    </div>
  );
}

function StockDeliveryComponent() {
  const { state, dispatch } = useProducts();
  return (
    <div className="flex flex__dir--col">
      <ul className="list--stacked items--start p--0">
        <li>
          <input
            type="checkbox"
            id="stockBtn"
            checked={state.includeOutStock === true}
            onChange={() => dispatch({ type: "STOCK" })}
          />
          <label htmlFor="stockBtn">Include Out of Stock</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="speedBtn"
            checked={state.shouldBeFast === true}
            onChange={() => dispatch({ type: "SPEED" })}
          />
          <label htmlFor="speedBtn">Fast delivery only</label>
        </li>
      </ul>
    </div>
  );
}

function PriceComponent() {
  const { state, dispatch } = useProducts();
  return (
    <div className="flex flex__dir--col fiters__price">
      <h4 className="heading h--4 m__t-1">Price</h4>
      <input
        type="range"
        className="m__l-1"
        min="49"
        max="1000"
        value={state.price}
        onChange={(e) => dispatch({ type: "PRICE", payload: e.target.value })}
      />
      <div className="flex justify--between m__l-1">
        <span>₹49</span>
        <span>₹1000</span>
      </div>
    </div>
  );
}

function CategoryFilter() {
  const {
    state: { categories },
    dispatch,
  } = useProducts();
  return (
    <div className="flex flex__dir--col">
      <h4 className="heading h--4 m__t-1">Categories</h4>
      <ul className="list--stacked items--start p--0">
        <li>
          <input
            type="checkbox"
            id="selfhelpBtn"
            checked={categories["selfhelp"] === true}
            onChange={() =>
              dispatch({ type: "CATEGORIES", payload: "selfhelp" })
            }
          />
          <label htmlFor="selfhelpBtn">Self Help</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="poetryBtn"
            checked={categories["poetry"] === true}
            onChange={() => dispatch({ type: "CATEGORIES", payload: "poetry" })}
          />
          <label htmlFor="poetryBtn">Poetry</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="fictionBtn"
            checked={categories["fiction"] === true}
            onChange={() =>
              dispatch({ type: "CATEGORIES", payload: "fiction" })
            }
          />
          <label htmlFor="fictionBtn">Fiction</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="nonfiction"
            checked={categories["nonfiction"] === true}
            onChange={() =>
              dispatch({ type: "CATEGORIES", payload: "nonfiction" })
            }
          />
          <label htmlFor="nonfiction">Non-fiction</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="examsBtn"
            checked={categories["exams"] === true}
            onChange={() => dispatch({ type: "CATEGORIES", payload: "exams" })}
          />
          <label htmlFor="examsBtn">Exam Preparation</label>
        </li>
      </ul>
    </div>
  );
}

function RatingComponent() {
  const {
    state: { rating },
    dispatch,
  } = useProducts();
  return (
    <div className="flex flex__dir--col fiters__ratings">
      <label className="heading h--4 m__t-1">Ratings</label>
      <ul className="list--stacked items--start p--0">
        <li>
          <input
            type="radio"
            id="rating4"
            checked={rating === "4"}
            onChange={() => dispatch({ type: "RATING", payload: "4" })}
          />
          <label htmlFor="rating4">4 stars & above</label>
        </li>
        <li>
          <input
            type="radio"
            id="rating3"
            checked={rating === "3"}
            onChange={() => dispatch({ type: "RATING", payload: "3" })}
          />
          <label htmlFor="rating3">3 stars & above</label>
        </li>
        <li>
          <input
            type="radio"
            id="rating2"
            checked={rating === "2"}
            onChange={() => dispatch({ type: "RATING", payload: "2" })}
          />
          <label htmlFor="rating2">2 stars & above</label>
        </li>
        <li>
          <input
            type="radio"
            id="rating1"
            checked={rating === "1"}
            onChange={() => dispatch({ type: "RATING", payload: "1" })}
          />
          <label htmlFor="rating1">1 star & above</label>
        </li>
      </ul>
    </div>
  );
}

function CoverTypeComponent() {
  const {
    state: { covertype },
    dispatch,
  } = useProducts();
  return (
    <div className="flex flex__dir--col fiters__cover-type m__b-4">
      <h4 className="heading h--4 m__t-1">Cover type</h4>
      <ul className="list--stacked items--start p--0">
        <li>
          <input
            type="checkbox"
            id="hardcoverBtn"
            checked={covertype["Hard Cover"] === true}
            onChange={() =>
              dispatch({ type: "COVERTYPE", payload: "Hard Cover" })
            }
          />
          <label htmlFor="hardcoverBtn">Hard Cover</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="paperbackBtn"
            checked={covertype["Paperback"] === true}
            onChange={() =>
              dispatch({ type: "COVERTYPE", payload: "Paperback" })
            }
          />
          <label htmlFor="paperbackBtn">Paperback</label>
        </li>
      </ul>
    </div>
  );
}

function Sidebar() {
  const { dispatch } = useProducts();
  return (
    <aside className="filters flex flex__dir--col items--start p--x-2 p--y-2">
      <div className="flex justify--between items--baseline flex__wrap--wrap">
        <h3 className="heading h--3 m__b-1 m__l-0">Filters</h3>
        <button
          className="btn btn--link text--xs"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Clear filters
        </button>
      </div>
      <StockDeliveryComponent />
      <SortComponent />
      <CategoryFilter />
      <PriceComponent />
      <RatingComponent />
      <CoverTypeComponent />
    </aside>
  );
}

function SidebarMobile() {
  return (
    <div className="filters--mobile flex flex__dir--col justify--center items--center p--x-1">
      <div className="flex justify--between items--baseline">
        <h3 className="heading h--3 m__b-1">Filters</h3>
        <button className="btn btn--link text--xs">Clear filters</button>
      </div>
      <StockDeliveryComponent />
      <SortComponent />
      <CategoryFilter />
      <PriceComponent />
      <RatingComponent />
      <CoverTypeComponent />
    </div>
  );
}
export { Sidebar, SidebarMobile };
