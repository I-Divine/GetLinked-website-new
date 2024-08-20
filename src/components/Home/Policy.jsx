import { useIsShown } from "./useShown";

const PolicySection = () => {
  const { isShown, ref } = useIsShown();
  return (
    <>
      <section className="policy grid-container section-pad">
        <div ref={ref} className={`hidden ${isShown ? "show" : ""}`}>
          <h2 className="heading">Privacy Policy and</h2>
          <h2 className="heading accent-2">Terms</h2>
          <p className="paragraph" style={{ fontSize: "var(--fs-small)" }}>
            Last updated on September 12, 2023
          </p>
          <p className="paragraph">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="policy-container">
            <p className="paragraph">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
            <h3 className="heading">Licensing Policy</h3>
            <h3 className="heading accent-2">
              Here are terms of our Standard License:
            </h3>
            <ul className="paragraph" style={{ textAlign: "left" }}>
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
          </div>
        </div>
        <div className="img-container">
          <img src="/images/security.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default PolicySection;
