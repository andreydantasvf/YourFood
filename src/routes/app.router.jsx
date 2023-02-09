import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";
import { Dish } from "../pages/Dish";
import { RequestDish } from "../pages/RequestDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-dish" element={<CreateDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/requestDish" element={<RequestDish />} />
    </Routes>
  );
}