import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.router";
import { AppRoutes } from "./app.router";

import { user } from "../mocks/mockUser";

export function Routes() {
  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}