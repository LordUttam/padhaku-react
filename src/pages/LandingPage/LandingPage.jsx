import "./landing-page.css";
import "styles/main.css";

import { Navigation, Carousel, Featured, Trending, Footer } from "components";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex__dir--col items--center">
        <div className="landing">
          <Carousel />
          <Featured />
          <Trending />
        </div>
      </main>
      <Footer />
    </>
  );
}
