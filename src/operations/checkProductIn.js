export const checkProductIn = (container, productId) =>
  container.find((product) => product._id === productId);
