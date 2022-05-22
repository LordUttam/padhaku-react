import { useState } from "react";
import { useProducts } from "contexts/product-context";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();
  const { dispatch } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = () => {
    dispatch({ type: "SEARCH", payload: searchTerm });
    navigate("/products");
  };

  return (
    <div className="search__container flex items--center justify--center">
      <div className="input__container flex--inline">
        <input
          type="text"
          className="input"
          placeholder="Search Here"
          onInput={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && searchHandler()}
        />
      </div>
      <button className="search__btn" onClick={searchHandler}>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}
