import Navlinks from "./Navlinks";
import NavlinksMobile from "./NavlinksMobile";

const Navbar = ({}) => {
  return (
    <div className="navbar">
      <h1>GetLinked</h1>
      <Navlinks />
      <NavlinksMobile />
    </div>
  );
};
export default Navbar;
