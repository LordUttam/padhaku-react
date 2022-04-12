import trendImg1 from "assets/images/book-covers/savarkar.jpg";
import trendImg2 from "assets/images/book-covers/one-arr-mur.jpg";
import trendImg3 from "assets/images/book-covers/auto-yogi.jpg";
import trendImg4 from "assets/images/book-covers/chanakya-neeti.jpg";
import trendImg5 from "assets/images/book-covers/yolo.jpg";
import trendImg6 from "assets/images/book-covers/savarkar2.jpg";
import { TrendingCard } from "components/cards/cards";

export default function Trending() {
  return (
    <>
      <h2 className="h--2 trending__heading m__t-1 m__b-0">Trending</h2>
      <section className="trending flex justify--center p--x-2 p--y-2">
        <TrendingCard
          trendImg={trendImg1}
          bookTitle="Savarkar (Part 1)"
          author="Vikram Sampath"
          price="Rs. 99"
        />

        <TrendingCard
          trendImg={trendImg2}
          bookTitle="One Arranged Murder"
          author="Chetan Bhagat"
          price="Rs. 99"
        />

        <TrendingCard
          trendImg={trendImg3}
          bookTitle="Autobiography of a Yogi"
          author="Paramhamsa Yogananda"
          price="Rs. 98"
        />

        <TrendingCard
          trendImg={trendImg4}
          bookTitle="Chanakya Neeti"
          author="Ashwini Parashar"
          price="Rs. 119"
        />

        <TrendingCard
          trendImg={trendImg5}
          bookTitle="You Only Live Once"
          author="Stuti Changle"
          price="Rs. 129"
        />

        <TrendingCard
          trendImg={trendImg6}
          bookTitle="Savarkar (Part 2)"
          author="Vikram Sampath"
          price="Rs. 199"
        />
      </section>
    </>
  );
}
