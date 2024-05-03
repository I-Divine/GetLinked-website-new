const FAQsSaection = () => {
  return (
    <>
      <section className="grid-container section-pad">
        <div className="img-container">
          <img src="/images/man-on-cloud.png" alt="" />
        </div>
        <div>
          <h2 className="heading">Frequently Ask </h2>
          <h2 className="heading accent-2">Question</h2>
          <p className="paragraph">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <p>
            <ul className="FAQS">
              <li>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className="accent-1">+</span>
              </li>
              <li>
                <span>What happens if I need help during the hackathon?</span>
                <span className="accent-1">+</span>
              </li>
              <li>
                <span>What happens if I don't have an idea for a project?</span>
                <span className="accent-1">+</span>
              </li>
              <li>
                <span>Can I join a team or do I have to come with one?</span>
                <span className="accent-1">+</span>
              </li>
              <li>
                <span>What happens after the hackathon ends</span>
                <span className="accent-1">+</span>
              </li>
              <li>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className="accent-1">+</span>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
};
export default FAQsSaection;
