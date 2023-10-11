import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/body/home";
import bgimage from "./images/backgroundimg.png";
import Cart from "./components/cart/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home bgimg={bgimage} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
