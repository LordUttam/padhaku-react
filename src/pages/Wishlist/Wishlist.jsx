import "./wishlist.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation, Footer } from "components";
import { useWishlist } from "contexts/wishlist-context";
import { WishlistCard } from "components/cards/cards";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { wishlistState } = useWishlist();
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <main className="flex flex__dir--col wishlist">
        <h2 className="h--2 wishlist__heading m__t-1 m__b-0">Wishlist</h2>

        {wishlistState.wishlistItems.length === 0 ? (
          <section className="flex flex__dir--col items--center justify--center m--auto p--x-2 p--y-2 wishlist--empty">
            <span className="text-center">
              <p className="text--lg text--bold">Your wishlist is empty </p>
              <p className="text--md">Start adding items to wishlist now!</p>
            </span>
            <button
              className="btn btn--primary p--1 m--1 shadow-hover--none"
              onClick={() => navigate("/products")}
            >
              Shop now
            </button>
          </section>
        ) : (
          <section className="flex flex__wrap--wrap justify--start items--start p--x-2 p--y-2">
            {wishlistState.wishlistItems.map((product) => (
              <WishlistCard productDetails={product} key={product._id} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
