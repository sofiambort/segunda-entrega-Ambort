import "./CounterPresentacional.css";

const CounterPresentacional = ({ sumar, restar, contador, onAdd, stock }) => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <button onClick={restar} className="boton-restar">
        -
      </button>
      <h3 style={{ fontSize: "25px", color: "black" }}> {contador} </h3>
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
      <div>
        <h5
          style={{
            border: "solid 1px",
            borderColor: "purple",
            padding: "5px",
            color: "black",
          }}
        >
          Stock disponible: {stock}
        </h5>
      </div>
    </div>
  );
};

export default CounterPresentacional;
