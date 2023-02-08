import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";
import { Dish } from "../pages/Dish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-dish" element={<CreateDish />} />
      <Route path="/dish/:id" element={<Dish />} />
    </Routes>
  );
}