import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-dish" element={<CreateDish />} />
    </Routes>
  );
}