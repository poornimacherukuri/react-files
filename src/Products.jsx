import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductCards from "./ProductCards";
import ProductInfo from "./ProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Products() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCards/>}></Route>
            <Route path="/product-info/:ID" element={<ProductInfo/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Products;