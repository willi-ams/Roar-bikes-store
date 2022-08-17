import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import RoadBikes from "./pages/RoadBikes";
import MountainBikes from "./pages/MountainBikes";
import FoldingBikes from "./pages/FoldingBikes";
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CartPage from "./pages/CartPage";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":productId" element={<ProductDetail />} />

        <Route path="/road-bikes" element={<RoadBikes />} />
        <Route path="/mountain-bikes" element={<MountainBikes />} />
        <Route path="/folding-bikes" element={<FoldingBikes />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/:product/:productId" element={<ProductDetail />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;