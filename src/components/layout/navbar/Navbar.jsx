import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import TemporaryDrawer from "./TemporaryDrawer";

export function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [mostrarDrawer, setMostrarDrawer] = useState(false);

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
    <Box
      className={`navbar ${scrolling ? "scrolled" : ""}`}
      sx={{ flexGrow: 1 }}
    >
      <AppBar style={{ backgroundColor: "linen" }} position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <TemporaryDrawer
            mostrarDrawer={mostrarDrawer}
            setMostrarDrawer={setMostrarDrawer}
          />

          <Link to={"/"}>
            <img
              style={{
                width: "100px",
                height: "auto",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695576333/logo_wqbusk.png"
              alt="logo del website"
            />
          </Link>

          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
