import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Support from "./Support";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/support" element={<Support/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Routing;