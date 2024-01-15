import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCart
 *   -Img
 *   -Name of Res,Star Rating,cuisines,etc
 * Footer
 * - Copyright
 * - Links
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCart = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-log"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfvo1yxb7itaf2veiwab"
      />
      <h3>Johnny Hot Dog</h3>
      <h3>Chicken, North India, Asian</h3>
      <h4>4.4 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
