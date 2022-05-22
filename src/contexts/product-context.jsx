import { reducerFunc } from "reducers/reducer";

import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, {
    sortBy: "",
    includeOutStock: false,
    shouldBeFast: false,
    price: 1000,
    categories: {
      exams: false,
      selfhelp: false,
      poetry: false,
      fiction: false,
      nonfiction: false,
    },
    covertype: {
      "Hard Cover": false,
      Paperback: false,
    },
    rating: "0",
    search: "",
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => useContext(ProductContext);
export { useProducts, ProductProvider };
