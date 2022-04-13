import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="filters flex flex__dir--col items--start p--x-2 p--y-2">
      <div className="flex justify--between items--baseline flex__wrap--wrap">
        <h3 className="heading h--3 m__b-1 m__l-0">Filters</h3>
        <button className="btn btn--link text--xs">Clear filters</button>
      </div>

      <div className="flex flex__dir--col fiters__category">
        <h4 className="heading h--4 m__t-1">Categories</h4>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="checkbox" />
            Exam Preparation
          </li>
          <li>
            <input type="checkbox" />
            Self Help
          </li>
          <li>
            <input type="checkbox" />
            Poetry
          </li>
          <li>
            <input type="checkbox" />
            classics
          </li>
          <li>
            <input type="checkbox" />
            School Books
          </li>
        </ul>
      </div>
      <div className="flex flex__dir--col fiters__price">
        <h4 className="heading h--4 m__t-1">Price</h4>
        <input type="range" className="m__l-1" />
        <div className="flex justify--between m__l-1">
          <span>₹75</span>
          <span>₹500</span>
        </div>
      </div>
      <div className="flex flex__dir--col fiters__ratings">
        <label className="heading h--4 m__t-1">Ratings</label>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="radio" name="rating-ops" />4 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />3 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />2 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />1 star & above
          </li>
        </ul>
      </div>
      <div className="flex flex__dir--col fiters__cover-type">
        <h4 className="heading h--4 m__t-1">Cover type</h4>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="checkbox" />
            Hard Cover
          </li>
          <li>
            <input type="checkbox" />
            Paperback
          </li>
        </ul>
      </div>
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

      <div className="flex flex__dir--col fiters__category">
        <h4 className="heading h--4 m__t-1">Categories</h4>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="checkbox" />
            Exam Preparation
          </li>
          <li>
            <input type="checkbox" />
            Self Help
          </li>
          <li>
            <input type="checkbox" />
            Poetry
          </li>
          <li>
            <input type="checkbox" />
            classNameics
          </li>
          <li>
            <input type="checkbox" />
            School Books
          </li>
        </ul>
      </div>
      <div className="flex flex__dir--col fiters__price">
        <h4 className="heading h--4 m__t-1">Price</h4>
        <input type="range" className="m__l-1" />
        <div className="flex justify--between m__l-1">
          <span>₹75</span>
          <span>₹500</span>
        </div>
      </div>
      <div className="flex flex__dir--col fiters__ratings">
        <label className="heading h--4 m__t-1">Ratings</label>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="radio" name="rating-ops" />4 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />3 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />2 stars & above
          </li>
          <li>
            <input type="radio" name="rating-ops" />1 star & above
          </li>
        </ul>
      </div>
      <div className="flex flex__dir--col fiters__cover-type m__b-4">
        <h4 className="heading h--4 m__t-1">Cover type</h4>
        <ul className="list--stacked items--start p--0">
          <li>
            <input type="checkbox" />
            Hard Cover
          </li>
          <li>
            <input type="checkbox" />
            Paperback
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Sidebar, SidebarMobile };
