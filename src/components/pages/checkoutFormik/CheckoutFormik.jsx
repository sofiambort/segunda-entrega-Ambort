import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
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

const CheckoutFormik = () => {
  const { handleChange, handleSubmit } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },
    onSubmit: () => {},
  });
};

return (
  <>
    <div
      style={{
        height: "100vh",
        paddingTop: "150px",
        paddingLeft: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ margin: "20px" }}
          label="Nombre"
          variant="Standard"
          name="nombre"
          onChange={handleChange}
        />
        <span style={{ color: "red", fontSize: "8px" }}>{errors.nombre}</span>
        <TextField
          style={{ margin: "20px" }}
          label="Apellido"
          variant="Standard"
          name="apellido"
          onChange={handleChange}
        />
        <span style={{ color: "red", fontSize: "8px" }}>{errors.apellido}</span>
        <TextField
          style={{ margin: "20px" }}
          label="Email"
          variant="Standard"
          name="email"
          onChange={handleChange}
        />
        <span style={{ color: "red", fontSize: "8px" }}>{errors.email}</span>
        <Button
          style={{ marginTop: "30px", marginRight: "20px" }}
          variant="contained"
          type="submit"
          disabled={!canBuy}
        >
          Comprar
        </Button>
        <Button style={{ marginTop: "30px" }} variant="outlined" type="button">
          Cancelar
        </Button>
      </form>
    </div>
  </>
);

export default CheckoutFormik;
