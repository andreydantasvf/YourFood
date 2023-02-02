import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.router";
import { AppRoutes } from "./app.router";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}