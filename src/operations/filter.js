const stockFilter = (products, includeOutStock) => {
  const filteredProducts = includeOutStock
    ? products
    : products.filter((product) => product.inStock === true);
  return filteredProducts;
};

const speedFilter = (products, shouldBeFast) => {
  const fastProds = shouldBeFast
    ? products.filter((product) => product.fastDelivery === true)
    : products;
  return fastProds;
};

const priceFilter = (products, price) => {
  const priceFilteredProducts = products.filter(
    (product) => Number(product.price) <= price
  );
  return priceFilteredProducts;
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
