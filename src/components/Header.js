import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginButton, setloginButton] = useState("login");
  console.log("rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
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
    </div>
  );
};

export default Header;
