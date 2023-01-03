import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PublicRoute } from "./PublicRoute";
import { RouteProtected } from "./RouteProtected";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <RouteProtected>
              <HeroesRoutes />
            </RouteProtected>
          }
        />
      </Routes>
    </>
  );
};
