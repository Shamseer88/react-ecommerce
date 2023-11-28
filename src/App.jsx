import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import TopNavbar from "./components/navbar/top/TopNavbar";
import Footer from "./components/footer/Footer";
import Category from "./pages/category/Category";
import SingleProduct from "./pages/single_product/SingleProduct";

export default function App() {
  return (
    <div>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:_id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}
