import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import BreadCrumbs from "./Components/BreadCrumbs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
