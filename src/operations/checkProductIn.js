export const checkProductIn = (container, productDetails) => {
  const product = productDetails;
  return container.find(
    ({ bookTitle, coverType, fastDelivery }) =>
      bookTitle === product.bookTitle &&
      coverType === product.coverType &&
      fastDelivery === product.fastDelivery
  );
};
