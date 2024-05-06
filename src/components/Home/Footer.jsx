const FooterSection = () => {
  return (
    <>
      <footer>
        <div className="footer-grid section-pad">
          <div>
            <h2>getlinked</h2>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p>Terms of Use Privacy Policy</p>
          </div>
          <div>
            <p className="fs-small accent-2 fw-bold">Useful Links</p>
            <p className="fs-small">Overview</p>
            <p className="fs-small">Timeline</p>
            <p className="fs-small">FAQs</p>
            <p className="fs-small">Register</p>
            <p>
              Follow us{" "}
              <img
                style={{ width: "7rem", marginLeft: "1rem" }}
                src="/images/Social media.png"
                alt=""
              />
            </p>
          </div>
          <div>
            <p className="accent-2 fw-bold">Contact us</p>
            <p>
              <img src="/images/Call.png" alt="" /> +234 6707653444
            </p>
            <p>
              <img src="/images/location.png" alt="" /> 27,Alara Street Yaba
              100012 Lagos State4
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          All rights reserved. © getlinked Ltd.
        </div>
      </footer>
    </>
  );
};
export default FooterSection;
