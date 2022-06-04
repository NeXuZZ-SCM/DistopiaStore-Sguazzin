import NavBar from "./components/NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Category from "./views/Category/Category";
import Item from "./views/Item/Item";
import Cart from "./views/Cart/Cart";
import {CartCustomProvider} from "./components/CartCustomProvider/CartCustomProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartCustomProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Category greeting={"Todos nuestros productos"}/>} />
            <Route exact path="/category/:categoryId" element={<Category/>} />
            <Route exact path="/item/:itemId" element={<Item/>} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
