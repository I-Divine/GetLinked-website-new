import { useIsShown } from "./useShown";
const IntroSection = () => {
  const { isShown, ref } = useIsShown();

  return (
    <>
      <section
        id="overview"
        className="intro grid-container section-pad"
        style={{ alignItems: "center" }}
        ref={ref}
      >
        <div className="img-container">
          <img src="/images/the-big-idea.png" alt="" />
        </div>
        <div className={`hidden ${isShown ? "show" : ""}`}>
          <h2 className="heading">Introduction to getlinked </h2>
          <h2 className="heading accent-2">tech Hackathon 1.0</h2>
          <p className="paragraph">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <hr />
    </>
  );
};
export default IntroSection;
