const IntroSection = () => {
  return (
    <section
      className="intro grid-container section-pad"
      style={{ alignItems: "center" }}
    >
      <div className="img-container">
        <img src="/images/the-big-idea.png" alt="" />
      </div>
      <div>
        <p className="heading">Introduction to getlinked </p>
        <p className="heading accent-2">tech Hackathon 1.0</p>
        <p className="paragraph">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
};
export default IntroSection;
