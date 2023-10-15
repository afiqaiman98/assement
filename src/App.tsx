import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";
import { Navbar } from "./components/Navbar";
import { ProductContextProvider } from "./context/ProductContext";
import {ProductDetails} from "./components/ProductDetails";


function App() {
  return (
    <>
    <ProductContextProvider>
    <Navbar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Container>
    </ProductContextProvider>
    </>
  );
}

export default App;
