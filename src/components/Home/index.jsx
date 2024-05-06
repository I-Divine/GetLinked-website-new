import HeroSection from "./Hero";
import Navbar from "../Navbar";
import IntroSection from "./Intro";
import RulesSection from "./RulesAndGuidelines";
import JudgingCriteriaSection from "./JudgingCriteria";
import FAQsSaection from "./FAQs";
import TimelineSection from "./Timeline";
import RewardSection from "./Rewards";
import PartnersSection from "./Partners";
import PolicySection from "./Policy";
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
        <TimelineSection />
        <RewardSection />
        <PartnersSection />
        <PolicySection />
      </main>
    </>
  );
};
export default Home;
