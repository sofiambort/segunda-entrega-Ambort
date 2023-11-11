import ProductCard from "../../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  console.log(items[0]?.title);

  return (
    <>
      <section className="lista-productos">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default ItemList;
