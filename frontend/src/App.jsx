import { Routes ,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Collection from './Pages/Collection';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import PlaceOrder from './Pages/PlaceOrder';

import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import SearchBar from "./Component/SearchBar";

import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

console.log(
  "%c Stratos - Web Development Team",
  "color: #4CAF50; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px black;"
);

console.log(
  "%c 📞 Contact:  0948434660 /  0934422559",
  "color: #2196F3; font-size: 16px; font-weight: bold;"
);

console.log(
  "%c 🌐 Portfolio Link: https://67b0520f370323c580883994--glittery-bublanina-a7d211.netlify.app/",
  "color: #FF9800; font-size: 16px; font-weight: bold; text-decoration: underline;"
);



const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     
      
      <NavBar/>
      <SearchBar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        

      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
