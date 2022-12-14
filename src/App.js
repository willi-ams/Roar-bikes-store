import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './components/layout/LoadingSpinner';
import Layout from './components/layout/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const RoadBikes = React.lazy(() => import('./pages/RoadBikes'));
const MountainBikes = React.lazy(() => import('./pages/MountainBikes'));
const FoldingBikes = React.lazy(() => import('./pages/FoldingBikes'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const CartLink = React.lazy(() => import('./pages/CartLink'));
const WishList = React.lazy(() => import('./pages/SavedItems'));
const Notfound = React.lazy(() => import('./pages/NotFound'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
    return (
        <ScrollToTop>
            <Layout>
                <Suspense
                    fallback={
                        <div className="centered">
                            <LoadingSpinner />
                        </div>
                    }
                >
                    <Routes>
                        <Route path="*" element={<Notfound />} />
                        <Route path="/" element={<Home />} />
                        <Route path=":productId" element={<ProductDetail />} />

                        <Route path="/shop" element={<Navigate to="/road-bikes" replace />} />
                        <Route path="/road-bikes" element={<RoadBikes />} />
                        <Route path="/mountain-bikes" element={<MountainBikes />} />
                        <Route path="/folding-bikes" element={<FoldingBikes />} />
                        <Route path="/cart" element={<CartLink />} />
                        <Route path="/wishlist" element={<WishList />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* <Route path="/:product/:productId" element={<ProductDetail />} /> */}
                    </Routes>
                </Suspense>
            </Layout>
        </ScrollToTop>
    );
}

export default App;
