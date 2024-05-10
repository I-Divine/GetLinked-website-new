const RegisterForm = () => {
  return (
    <>
      <section
        className=" grid-container section-pad reg"
        style={{ gridTemplateColumns: "40% 60%" }}
      >
        <div className="img-container">
          <img src="/images/3d-graphic-designer.png" alt="" />
        </div>

        <form className="register-form">
          <h2 className="heading accent-1">Register</h2>
          <p>Be part of this movement!</p>
          <p className="fs-large">CREATE YOUR ACCOUNT</p>
          <div className="form-grid">
            <label>
              Team's Name <br />
              <input
                autoComplete="on"
                placeholder="Enter the name of your group"
              />
            </label>
            <label>
              Phone <br />
              <input
                type="tel"
                autoComplete="on"
                placeholder="Enter your phone number"
              />
            </label>
            <label>
              Email <br />
              <input
                type="email"
                autoComplete="on"
                placeholder="Enter your email address"
              />
            </label>
            <label>
              Project Topic <br />
              <input placeholder="Enter your project topic" />
            </label>
            <label>
              Category <br />
              <select name="category" id="category">
                <option value="">Health Care</option>
                <option value="">Telecommunication</option>
                <option value="">Finance</option>
                <option value="">Education</option>
                <option value="">Other</option>
              </select>
            </label>
            <label>
              Group Size <br />
              <select name="group-size" id="group-size">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
              </select>
            </label>
          </div>

          <div className="btn-container">
            <button className="btn">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default RegisterForm;
