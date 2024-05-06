import { Link } from "react-router-dom/cjs/react-router-dom";
const RegisterBtn = ({ size }) => {
  return (
    <Link to="/register" className={`register ${size}`}>
      Register
    </Link>
  );
};

export default RegisterBtn;
