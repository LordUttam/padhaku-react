const sorter = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return products.sort((p1, p2) => Number(p1.price) - Number(p2.price));
  }
  if (sortBy === "HIGH_TO_LOW") {
    return products.sort((p1, p2) => Number(p2.price) - Number(p1.price));
  }
  return products;
};

export { sorter };
