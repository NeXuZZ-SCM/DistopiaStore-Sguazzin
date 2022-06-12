import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
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
import {CartCustomProvider} from "../src/context/CartContext";
import Checkout from "./views/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartCustomProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route exact path="/category/:categoryId" element={<Category />} />
            <Route exact path="/item/:itemId" element={<Item/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/checkout" element={<Checkout/>} />
          </Routes>
          <Footer />
        </CartCustomProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
