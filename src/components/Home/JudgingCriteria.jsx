const JudgingCriteriaSection = () => {
  return (
    <>
      <section className="grid-container section-pad">
        <div className="img-container" style={{ alignSelf: "center" }}>
          <img src="/images/judging-criteria.png" alt="" />
        </div>
        <div>
          <h2 className="heading">Judging Criteria</h2>
          <h2 className="heading">Key attributes</h2>
          <p className="paragraph">
            <span className="accent-2">Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="paragraph">
            <span className="accent-2">Functionality: </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="paragraph">
            <span className="accent-2">Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="paragraph">
            <span className="accent-2"> Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="paragraph">
            <span className="accent-2">Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>
      </section>
      <hr />
    </>
  );
};
export default JudgingCriteriaSection;
