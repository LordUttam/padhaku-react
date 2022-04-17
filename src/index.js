import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { ProductProvider } from "contexts/product-context";
import { CartProvider } from "contexts/cart-context";
import { WishlistProvider } from "contexts/wishlist-context";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
