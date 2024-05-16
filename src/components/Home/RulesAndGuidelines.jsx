import { useIsShown } from "./useShown";
const RulesSection = () => {
  const { isShown, ref } = useIsShown();
  return (
    <>
      {" "}
      <section className="grid-container section-pad" ref={ref}>
        <div className="img-container place-right">
          <img src="/images/lady-with-notebook.png" alt="" />
        </div>
        <div
          className={`place-left align-center hidden ${isShown ? "show" : ""}`}
        >
          <p className="heading">Rules and</p>
          <p className="heading accent-2">Guidelines</p>

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
      <hr></hr>
    </>
  );
};
export default RulesSection;
