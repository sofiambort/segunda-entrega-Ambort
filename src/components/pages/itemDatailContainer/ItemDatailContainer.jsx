import { useContext, useEffect, useState } from "react";
import ItemDatail from "./ItemDatail";
import { useParams } from "react-router-dom"; //si uso el navigate, ponerlo aca
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { baseDatos } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDatailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState(true);

  const { id } = useParams();

  // const navigate = useNavigate();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(id);

  useEffect(() => {
    let itemCollection = collection(baseDatos, "products");

    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: false,
      timer: 1500,
    });

    // setTimeout(() => {
    //   navigate("/cart");
    // }, 1000);

    setShowCounter(false);
  };

  return (
    <ItemDatail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
      showCounter={showCounter}
    />
  );
};

export default ItemDatailContainer;
