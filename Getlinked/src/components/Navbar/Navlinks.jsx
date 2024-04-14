import RegisterBtn from "../RegisterBtn";

const Navlinks = () => {
  return (
    <nav>
      <ul className="nav-container font-medium desktop">
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
          <a href="">Contact</a>
        </li>
        <li>
          <RegisterBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
