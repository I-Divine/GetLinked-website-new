import { Link } from "react-router-dom/cjs/react-router-dom";
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
              <a href="/#timeline">Timelines</a>
            </li>
            <li>
              <a href="/#overview">Overview</a>
            </li>
            <li>
              <a href="/#FAQs">FAQs</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <RegisterBtn />
          </ul>
        </nav>
      </label>
    </>
  );
};
export default NavlinksMobile;
