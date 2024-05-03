import HeroSection from "./Hero";
import Navbar from "../Navbar";
import IntroSection from "./Intro";
import RulesSection from "./RulesAndGuidelines";
import JudgingCriteriaSection from "./JudgingCriteria";
import FAQsSaection from "./FAQs";
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
        <JudgingCriteriaSection />
        <FAQsSaection />
      </main>
    </>
  );
};
export default Home;
