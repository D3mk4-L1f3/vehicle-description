import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./Header/Header";

const HomePage = lazy(() => import("pages/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
