import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro que deseas vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "SI",
      denyButtonText: "NO",
      buttonsStyling: false,
      customClass: {
        confirmButton: "custom-confirm-button",
        denyButton: "custom-deny-button",
        title: "swa12-title",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "El carrito está vacío!",
          icon: "success",
          customClass: {
            title: "custom-text-success",
            icon: "custom-icon-success",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "No se ha vaciado tu carrito",
          icon: "info",
          customClass: {
            title: "custom-text-info",
            icon: "custom-icon-info",
          },
        });
      }
    });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 className="title-product-cart">PRODUCTOS EN TU CARRITO</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {cart.map((product) => (
          <Card
            sx={{
              maxWidth: 320,
              padding: "10px",
              backgroundColor: "linen",
              margin: "20px",
            }}
            key={product.id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={product.img}
                alt=""
                style={{
                  border: "solid 1px",
                  borderColor: "lightgray",
                  width: "250px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div>Precio del producto: {product.price}</div>
                  <div>Cantidad: {product.quantity}</div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteIcon color="secondary" />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
      {cart.length > 0 && (
        <div>
          <h3
            style={{
              padding: "10px",
              fontFamily: "fuenteCart",
            }}
          >
            <span
              style={{
                color: "whitesmoke",
                border: "solid 1px",
                padding: "10px",
              }}
            >
              El total a pagar es : ${total}
            </span>
          </h3>

          <Link to={"/checkout"}>
            <Button
              color="secondary"
              variant="outlined"
              style={{ margin: "15px", backgroundColor: "linen" }}
            >
              FINALIZAR COMPRA
            </Button>
          </Link>
          <Button
            onClick={clearCartAlert}
            color="secondary"
            variant="outlined"
            style={{ margin: "15px", backgroundColor: "linen" }}
          >
            Vaciar carrito
          </Button>
        </div>
      )}
      <div className="whatsapp-container">
        <img
          className="icon-wpp"
          src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699613635/580b57fcd9996e24bc43c543_fcja2u.webp"
          alt="icono-wpp"
        />
      </div>
    </div>
  );
};

export default Cart;
