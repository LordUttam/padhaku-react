import { FeaturedCard } from "components/cards/cards";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Featured() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setFeaturedCategories(response.data.categories);
    })();
  }, []);

  return (
    <>
      <h2 className="h--2 featured__heading m__t-1 m__b-0">Featured</h2>
      <section className="featured flex justify--center p--x-2 p--y-2">
        {featuredCategories.map((category) => (
          <FeaturedCard
            featImg={category.featImg}
            feaImgAlt={category.categoryName}
            cardTitle={category.categoryName}
            cardSubtitle={category.description}
            categoryId={category.categoryId}
            key={category._id}
          />
        ))}
      </section>
    </>
  );
}
