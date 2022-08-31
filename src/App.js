import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import LoadingSpinner from "./components/layout/LoadingSpinner";
import Layout from "./components/layout/Layout";

// const Home = React.lazy(() => import('./pages/Home'));
// const RoadBikes = React.lazy(() => import('./pages/RoadBikes'));
// const MountainBikes = React.lazy(() => import('./pages/MountainBikes'));
// const FoldingBikes = React.lazy(() => import('./pages/FoldingBikes'));
// const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));
// const CartLink = React.lazy(() => import('./pages/CartLink'));
// import Contact from './pages/Contact';

import Home from "./pages/Home";
import RoadBikes from "./pages/RoadBikes";
import MountainBikes from "./pages/MountainBikes";
import FoldingBikes from "./pages/FoldingBikes";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import CartLink from "./pages/CartLink";

function App() {

  return (
    <ScrollToTop>
      <Layout>
        {/* <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}> */}
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path=":productId" element={<ProductDetail />} />

            <Route path="/road-bikes" element={<RoadBikes />} />
            <Route path="/mountain-bikes" element={<MountainBikes />} />
            <Route path="/folding-bikes" element={<FoldingBikes />} />
            <Route path="/cart" element={<CartLink />} />

            {/* <Route path="/:product/:productId" element={<ProductDetail />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}

          </Routes>
        {/* </Suspense> */}
      </Layout>
    </ScrollToTop>
  );
}

export default App;