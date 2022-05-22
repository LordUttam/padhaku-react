import axios from "axios";

export const getCartApi = (encodedToken) => {
  return axios.get("/api/user/cart/", {
    headers: { authorization: encodedToken },
  });
};

export const postCartApi = (productDetails, encodedToken) => {
  return axios.post(
    "/api/user/cart/",
    {
      product: productDetails,
    },
    { headers: { authorization: encodedToken } }
  );
};

export const deleteFromCartApi = (productId, encodedToken) => {
  return axios.delete("/api/user/cart/" + productId, {
    headers: { authorization: encodedToken },
  });
};

export const updateCartApi = (productId, actionType, encodedToken) => {
  return axios.post(
    "/api/user/cart/" + productId,
    {
      action: {
        type: actionType,
      },
    },
    { headers: { authorization: encodedToken } }
  );
};
