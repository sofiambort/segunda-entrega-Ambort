import { useContext, useState } from "react";
import "./CheckoutFormik.css";
import { CartContext } from "../../../context/CartContext";
import {
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { baseDatos } from "../../../firebaseConfig";
import { Link } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";

const CheckOut = () => {
  const [canBuy, setCanBuy] = useState(false);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    if (
      userInfo.nombre.length >= 3 &&
      userInfo.apellido.length > 0 &&
      userInfo.email.includes("@")
    ) {
      setCanBuy(true);
    } else {
      setCanBuy(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(baseDatos, "orders");

    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(baseDatos, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();

    if (userInfo.nombre.length < 3 || !userInfo.email.includes("@")) {
      if (userInfo.nombre.length < 3)
        setErrors({
          ...errors,
          nombre: "El nombre debe tener al menos 3 caracteres",
        });
    }
    if (!userInfo.email.includes("@")) {
      setErrors({ ...errors, email: "No corresponde a un email valido" });
      return;
    }
  };

  return (
    <>
      {orderId ? (
        <div style={{ minHeight: "80vh" }}>
          <h5 className="thanks-buy">
            Gracias por su compra!! Su N° de comprobante es:
          </h5>
          <h5 className="num-compra">{orderId}</h5>
          <Link className="seguir-compra" to="/">
            SEGUIR COMPRANDO
          </Link>
        </div>
      ) : (
        <div className="contenedor-gral">
          <Grid
            container
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={10} md={8} className="contenedor-form">
              <form onSubmit={handleSubmit}>
                <Grid container className="form" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="nombre"
                      onChange={handleChange}
                      label="Nombre"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="apellido"
                      onChange={handleChange}
                      label="Apellido"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      onChange={handleChange}
                      label="Email"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item xs={12} sm={4}>
                    <Button
                      disabled={!canBuy}
                      style={{ marginTop: "30px" }}
                      variant="contained"
                      type="submit"
                      color="secondary"
                      fullWidth
                    >
                      COMPRAR
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      style={{ marginTop: "30px" }}
                      variant="outlined"
                      type="button"
                      color="secondary"
                      fullWidth
                    >
                      CANCELAR
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>

          <div className="whatsapp-container">
            <img
              className="icon-wpp"
              src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699613635/580b57fcd9996e24bc43c543_fcja2u.webp"
              alt="icono-wpp"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
