import HeroSection from "./Hero";
import Navbar from "../Navbar";
import IntroSection from "./Intro";
import RulesSection from "./RulesAndGuidelines";
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
        <RulesSection />
      </main>
    </>
  );
};
export default Home;
