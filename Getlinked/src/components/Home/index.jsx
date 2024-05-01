import HeroSection from "./Hero";
import Navbar from "../Navbar";
import IntroSection from "./Intro";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <hr />
      <main>
        <HeroSection />
        <IntroSection />
      </main>
    </>
  );
};
export default Home;
