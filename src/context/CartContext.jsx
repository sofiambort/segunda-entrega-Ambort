//ESTE ES EL COMPONENTE PROVEEDOR DEL CONTEXTO
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //ESTA ES TODA LA LOGICA PARA AGREGAR UN ELEMENTO A UN ARREGLO
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArr = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
      localStorage.setItem("cart", JSON.stringify(newArr));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  //obtener el total del carrito

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  //poder borrar un elemento particualar del carrito

  const deleteProductById = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  //limpiar el carrito

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //obtener la cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantityById,
        clearCart,
        deleteProductById,
        getTotalPrice,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;
