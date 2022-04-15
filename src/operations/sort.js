const sorter = (products, sortBy) => {
  if (sortBy === "LTH") {
    return products.sort((p1, p2) => Number(p1.price) - Number(p2.price));
  }
  if (sortBy === "HTL") {
    return products.sort((p1, p2) => Number(p2.price) - Number(p1.price));
  }
  return products;
};

export { sorter };
