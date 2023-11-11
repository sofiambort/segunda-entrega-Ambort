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

    console.log(userInfo);
  };

  return (
    <>
      {orderId ? (
        <div style={{ minHeight: "100vh" }}>
          <h5
            style={{
              paddingTop: "350px",
              display: "flex",
              justifyContent: "center",
              fontFamily: "fuenteGeneral",
              fontSize: "25px",
              color: "whitesmoke",
            }}
          >
            Gracias por su compra!! Su N° de comprobante es: {orderId}
          </h5>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "fuenteGeneral",
              fontSize: "25px",
              color: "pink",
            }}
            to="/"
          >
            SEGUIR COMPRANDO
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            paddingTop: "150px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              placeholder="Nombre"
            />
            <span style={{ color: "red", fontSize: "8px" }}>
              {errors.nombre}
            </span>
            <input
              type="text"
              name="apellido"
              onChange={handleChange}
              placeholder="Apellido"
            />
            <span style={{ color: "red", fontSize: "8px" }}>
              {errors.apellido}
            </span>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <span style={{ color: "red", fontSize: "8px" }}>
              {errors.email}
            </span>

            <button disabled={!canBuy}>COMPRAR</button>
            <button type="button" onClick={() => console.log("se cancelo")}>
              CANCELAR
            </button>
          </form>

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
