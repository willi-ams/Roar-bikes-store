import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import RoadBikes from "./pages/RoadBikes";
import MountainBikes from "./pages/MountainBikes";
import FoldingBikes from "./pages/FoldingBikes";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/road-bikes" element={<RoadBikes />} />
        <Route path="/mountain-bikes" element={<MountainBikes />} />
        <Route path="/folding-bikes" element={<FoldingBikes />} />
      </Routes>
    </Layout>
  );
}

export default App;