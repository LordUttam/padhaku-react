const stockFilter = (products, includeOutStock) => {
  return includeOutStock
    ? products
    : products.filter((product) => product.inStock === true);
};

const speedFilter = (products, shouldBeFast) => {
  return shouldBeFast
    ? products.filter((product) => product.fastDelivery === true)
    : products;
};

const priceFilter = (products, price) => {
  return products.filter((product) => Number(product.price) <= price);
};

const categoryFilter = (products, categories) => {
  if (Object.values(categories).every((val) => val === false)) return products;
  return products.filter((product) => categories[product.categoryName]);
};

const coverTypeFilter = (products, covertypes) => {
  if (Object.values(covertypes).every((val) => val === false)) return products;
  return products.filter((product) => covertypes[product.coverType]);
};

const ratingFilter = (products, ratings) => {
  return products.filter(
    (product) => Number(product.rating) >= Number(ratings)
  );
};

export {
  stockFilter,
  speedFilter,
  priceFilter,
  categoryFilter,
  coverTypeFilter,
  ratingFilter,
};
