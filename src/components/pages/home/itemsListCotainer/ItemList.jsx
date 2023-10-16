import ProductCard from "../../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  console.log(items[0]?.title);

  return (
    <>
      <div className="welcome">
        {/* <h4>Bienvenidos a nuestro vivero</h4>
        <h4>{vivero}</h4> */}
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default ItemList;
