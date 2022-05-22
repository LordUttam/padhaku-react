import axios from "axios";

export const getWishlistApi = (encodedToken) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });
};

export const postWishlistApi = (productDetails, encodedToken) => {
  return axios.post(
    "/api/user/wishlist",
    {
      product: productDetails,
    },
    { headers: { authorization: encodedToken } }
  );
};

export const deleteFromWishlistApi = (productId, encodedToken) => {
  return axios.delete("/api/user/wishlist/" + productId, {
    headers: { authorization: encodedToken },
  });
};
