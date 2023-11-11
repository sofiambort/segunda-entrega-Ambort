import { useState, useEffect } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Link className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <Link to={"/"}>
          <img
            className="logo"
            src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695576333/logo_wqbusk.png"
            alt="logo del website"
          />
        </Link>
        <ul>
          <Link to={"/category/Interior"}>
            <li>INTERIOR</li>
          </Link>
          <Link to={"/category/Exterior"}>
            <li>EXTERIOR</li>
          </Link>
          <Link to={"/category/Mantenimiento"}>
            <li>MANTENIMIENTO</li>
          </Link>
          <Link to={"/category/Ambientación"}>
            <li>AMBIENTACIÓN</li>
          </Link>
        </ul>
        <CartWidget />
      </Link>
    </>
  );
}
