import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link className="navbar">
        <Link to={"/"}>
          <img
            className="logo"
            src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695576333/logo_wqbusk.png"
            alt="logo del website"
          />
        </Link>
        <ul>
          <Link to={"/category/interior"}>
            <li>INTERIOR</li>
          </Link>
          <Link to={"/category/exterior"}>
            <li>EXTERIOR</li>
          </Link>
          <Link to={"/category/mantenimiento"}>
            <li>MANTENIMIENTO</li>
          </Link>
          <Link to={"/category/decorativo"}>
            <li>DECORATIVO</li>
          </Link>
        </ul>
        <CartWidget />
      </Link>
    </>
  );
}
