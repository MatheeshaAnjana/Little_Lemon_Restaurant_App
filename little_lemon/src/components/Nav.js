import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;