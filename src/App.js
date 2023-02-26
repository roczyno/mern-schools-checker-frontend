import Home from "./pages/home/Home";
import Ucc from "./pages/ucc/Ucc";
import Knust from "./pages/knust/Knust";
import Winneba from "./pages/winneba/Winneba";
import Leg from "./pages/leg/Leg";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ucc" element={<Ucc />} />
        <Route path="/leg" element={<Leg />} />
        <Route path="/knust" element={<Knust />} />
        <Route path="/uew" element={<Winneba />} />
      </Routes>
    </div>
  );
};

export default App;
