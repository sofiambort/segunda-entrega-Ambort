import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <Link to={"/cart"} style={{ marginTop: "15px" }}>
      <Badge badgeContent={total} showZero color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
