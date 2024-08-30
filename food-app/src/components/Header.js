import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items); // store.cart - name of the store (cart) and items refers to initial state items

  return (
    <div className="flex justify-between border border-white/30 rounded-lg px-5 w-[95%] mx-auto shadow-lg bg-white/10 backdrop-blur-md text-black/80">
      <div className="logo-container">
        <img
          className="w-20 h-20 rounded-full my-2"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center list-none text-lg">
        <ul className="flex">
          <li><Link to="/" className="no-underline hover:underline text-black font-semibold p-2.5 m-2.5">Home</Link></li>
          <li><Link to="/about" className="no-underline hover:underline text-black font-semibold p-2.5 m-2.5">About Us</Link></li>
          <li><Link to="/contact" className="no-underline hover:underline text-black font-semibold p-2.5 m-2.5">Contact Us</Link></li>
          <li><Link to="/cart" className="no-underline hover:underline text-black font-semibold p-2.5 m-2.5">Cart ({cartItems.length} items)</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;