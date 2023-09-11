import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./styles.css";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import { MenuIcon } from "./icons/Menu";

function App() {
  const { pathname } = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const menuClickHandler = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Link className="Home" to="/">
          <button className="home">Home</button>
          <MenuIcon onClick={menuClickHandler} />
        </Link>
        {pathname === "/" && (
          <div className={`menu ${isNavbarOpen && "active"}`}>
            <Link to="/cart">
              <button className="goToCartbtn">GO TO CART</button>
            </Link>
            <Link to="/login" state={{ from: "/" }}>
              <button className="goToCartbtn">Login</button>
            </Link>
            <Link to="/wishlist">
              <button className="goToCartbtn">Wishlist</button>
            </Link>
          </div>
        )}
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
