import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDatail.css";

const ItemDatail = ({ productSelected, onAdd, initial, showCounter }) => {
  return (
    <div style={{ paddingTop: "140px" }}>
      <div className="contenedor-detalle">
        <div className="contenedor-img">
          <img className="imagen-planta" src={productSelected.img} alt="" />
        </div>
        <div className="detalles-contador">
          <h2 className="titulo-datail">{productSelected.title}</h2>
          <h3 className="description-datail">{productSelected.detalle}</h3>
          <h3 className="description-price">$ {productSelected.price}</h3>

          {initial && (
            <h5 className="stock-alcanzado">Ya tienes {initial} unidades</h5>
          )}

          {showCounter ? (
            <div className="counter-datail">
              <CounterContainer
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </div>
          ) : (
            <Link className="fin-compra" to="/cart">
              Terminar la compra
            </Link>
          )}
        </div>
      </div>
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

export default ItemDatail;
