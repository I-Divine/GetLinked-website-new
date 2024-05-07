const Contact = () => {
  return (
    <>
      <section className="contact grid-container section-pad">
        <div className="contact-details">
          <h2 className="heading accent-1">Get in touch</h2>
          <p>
            Contact
            <br /> Information
          </p>
          <p>
            27,Alara Street
            <br /> Yaba 100012
            <br /> Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>
          <p className="accent-2 fs-small">Share on</p>
          <img src="/images/Social media.png" alt="" />
        </div>

        <form>
          <h2 className="heading accent-1">Questions or need assistance?</h2>
          <h2 className="heading accent-1">Let us know about it!</h2>
          <p className="instruction">
            Email us below to any question related to our event
          </p>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Mail" />
          <textarea placeholder="message" rows="5"></textarea>
          <div className="btn-container">
            <button className="btn">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Contact;
