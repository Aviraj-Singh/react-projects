import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/" className="nav-links">Home</Link></li>
            <li><Link to="/about" className="nav-links">About Us</Link></li>
            <li><Link to="/contact" className="nav-links">Contact Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;