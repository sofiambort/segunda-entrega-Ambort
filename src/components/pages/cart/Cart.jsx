import { Button, IconButton } from "@mui/material";
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
      <h2
        style={{
          fontFamily: "fuenteCart",
          padding: "30px",
          color: "linen",
          display: "flex",
          justifyContent: "center",
          paddingTop: "160px",
        }}
      >
        PRODUCTOS EN TU CARRITO
      </h2>
      <div className="contenedor-carts">
        {cart.map((product) => (
          <div key={product.id} className="card-cart">
            <div>
              <h2 style={{ color: "purple", textTransform: "uppercase" }}>
                {product.title}
              </h2>
              <h2>{product.price}</h2>
              <h2>Cantidad: {product.quantity}</h2>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteIcon color="action" />
              </IconButton>
            </div>
            <div>
              <img className="img-cart" src={product.img} alt="" />
            </div>
          </div>
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
