import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/home/itemsListCotainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDatailContainer from "./components/pages/itemDatailContainer/ItemDatailContainer";
import { Home } from "./components/pages/home/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <Home /> <ItemListContainer />
                </>
              }
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDatail/:id" element={<ItemDatailContainer />} />

            <Route path="*" element={<h2>Not Found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
