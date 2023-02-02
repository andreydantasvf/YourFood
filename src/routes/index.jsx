import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.router";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <h1>Oi, {user.name}</h1> : <AuthRoutes />}
    </BrowserRouter>
  );
}