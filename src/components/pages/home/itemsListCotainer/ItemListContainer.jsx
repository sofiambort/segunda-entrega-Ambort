import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { baseDatos } from "../../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productCollection = collection(baseDatos, "products");
    let consulta = undefined;

    if (!categoryName) {
      consulta = productCollection;
    } else {
      consulta = query(
        productCollection,
        where("category", "==", categoryName)
      ); //que vas a comparar / como lo vas a comparar y contra quien lo vas a comparar
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      <p className="categoria-productos">{categoryName}</p>
      {items.length === 0 ? (
        <SyncLoader
          size={20}
          color="linen"
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            padding: "200px",
          }}
        />
      ) : (
        <ItemList items={items} />
      )}
      <div className="whatsapp-container">
        <img
          className="icon-wpp"
          src="https://res.cloudinary.com/duu1rotxg/image/upload/v1699613635/580b57fcd9996e24bc43c543_fcja2u.webp"
          alt="icono-wpp"
        />
      </div>

      {/* {items.length > 0 && <h3>Ya termino de cargar</h3>} */}
    </>
  );
};

export default ItemListContainer;
