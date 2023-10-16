import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDatail from "./ItemDatail";
import { useParams } from "react-router-dom";

const ItemDatailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      reject("Error");
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log("Este es el producto que se agrega", obj);
  };

  return <ItemDatail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDatailContainer;
