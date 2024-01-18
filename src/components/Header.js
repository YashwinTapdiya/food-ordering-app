import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setloginButton] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <header className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500] shadow-md">
      <div className="logo-container">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-16 mx-6 mt-2"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-4 hover:text-green-500 duration-[.3s]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-green-500 duration-[.3s]">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4 hover:text-green-500 duration-[.3s]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-green-500 duration-[.3s]">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 hover:text-green-500 duration-[.3s]"
            onClick={() => {
              loginButton === "login"
                ? setloginButton("log-out")
                : setloginButton("login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
