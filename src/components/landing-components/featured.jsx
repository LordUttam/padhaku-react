import featImg1 from "assets/images/categories/bitsat.jpg";
import featImg2 from "assets/images/categories/danbrown.jpg";
import featImg3 from "assets/images/categories/selfhelp.png";
import featImg4 from "assets/images/categories/schoolbooks.jpg";
import featImg5 from "assets/images/categories/classics.jpg";
import featImg6 from "assets/images/categories/poetry.jpg";
import FeaturedCard from "components/cards/featured-card";

export default function Featured() {
  return (
    <>
      <h2 className="h--2 featured__heading m__t-1 m__b-0">Featured</h2>
      <section className="featured flex justify--center p--x-2 p--y-2">
        <FeaturedCard
          featImg={featImg1}
          feaImgAlt="Exam Prep"
          cardTitle="Exam prep"
          cardSubtitle="75% off Rs. 99/book"
        />

        <FeaturedCard
          featImg={featImg2}
          feaImgAlt="Dan Brown"
          cardTitle="Dan Brown"
          cardSubtitle="75% off Rs. 99/book"
        />

        <FeaturedCard
          featImg={featImg3}
          feaImgAlt="Self Help"
          cardTitle="Self Help"
          cardSubtitle="75% off Rs. 149/book"
        />

        <FeaturedCard
          featImg={featImg4}
          feaImgAlt="School Books"
          cardTitle="School Books"
          cardSubtitle="75% off Rs. 129/book"
        />

        <FeaturedCard
          featImg={featImg5}
          feaImgAlt="Classics"
          cardTitle="Classics"
          cardSubtitle="65% off Rs. 129/book"
        />

        <FeaturedCard
          featImg={featImg6}
          feaImgAlt="Poetry"
          cardTitle="Poetry"
          cardSubtitle="50% off Rs. 199/book"
        />
      </section>
    </>
  );
}
