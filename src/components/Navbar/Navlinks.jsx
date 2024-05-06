import RegisterBtn from "../RegisterBtn";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navlinks = () => {
  return (
    <nav>
      <ul className="nav-container font-medium desktop">
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
        <li>
          <RegisterBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
