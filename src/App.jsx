/** @format */

import Counter from "./pages/favourite";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedNavbar from "./component/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Ecommerce from "./pages/e-commerce";
import ProductDetails from "./pages/e-commerce/productDetails";
import Cart from "./pages/cart/cart";


function App() {
  return (
    <BrowserRouter>
      <FixedNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/favourite" element={<Counter />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ecommerce" element={<Ecommerce />}></Route>
        <Route path="/ecommerce/:id" element={<ProductDetails />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
