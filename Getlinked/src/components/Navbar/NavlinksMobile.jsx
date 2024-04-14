import RegisterBtn from "../RegisterBtn";
import "./nav-button.css";
const NavlinksMobile = () => {
  return (
    <>
      <label htmlFor="nav-check" class="nav-check">
        <input type="checkbox" id="nav-check" />
        <div class="nav-btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav class="mobile-navbar">
          <ul class="mobile-navlist font-large">
            <li>
              <a href="">Timelines</a>
            </li>
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="./pages/contact.html">Contact</a>
            </li>

            <RegisterBtn />
          </ul>
        </nav>
      </label>
    </>
  );
};
export default NavlinksMobile;
