import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting={["Manzana", "Banana"]}/>


      <ToastContainer />
    </div>
  );
}

export default App;
