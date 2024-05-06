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
import FooterSection from "./Footer";
const Home = () => {
  return (
    <>
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
      <FooterSection />
    </>
  );
};
export default Home;
