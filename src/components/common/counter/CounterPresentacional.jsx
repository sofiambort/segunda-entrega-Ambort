import "./CounterPresentacional.css";

const CounterPresentacional = ({ sumar, restar, contador, onAdd, stock }) => {
  return (
    <div className="contenedor-counter">
      <div className="counter">
        <button onClick={restar} className="boton-restar">
          -
        </button>
        <h3 className="add-num"> {contador} </h3>
        <button onClick={sumar} className="boton-sumar">
          +
        </button>
        <button
          onClick={() => onAdd(contador)}
          className="boton-agregar-carrito"
          style={{ fontFamily: "fontCounter" }}
        >
          Agregar al carrito
        </button>
      </div>
      <div>
        <div>
          <span className="stock-disp">Stock disponible: {stock}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterPresentacional;
