import { useState } from "react";
import { useProducts } from "contexts/product-context";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();
  const { dispatch } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const searchItem = () => {
    navigate("/products");
    console.log("searhcin");
    dispatch({ type: "SEARCH", payload: searchTerm });
  };

  return (
    <div className="search__container flex items--center justify--center">
      <div className="input__container flex--inline">
        <input
          type="text"
          className="input"
          placeholder="Search Here"
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="search__btn" onClick={searchItem}>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}
