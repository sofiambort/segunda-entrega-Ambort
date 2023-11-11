import Cart from "../components/pages/cart/Cart";
import CheckOut from "../components/pages/checkout/CheckOut";
import { Home } from "../components/pages/home/Home";
import ItemListContainer from "../components/pages/home/itemsListCotainer/ItemListContainer";
import ItemDatailContainer from "../components/pages/itemDatailContainer/ItemDatailContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalle",
    path: "/itemDatail/:id",
    Element: ItemDatailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOut,
  },
];
