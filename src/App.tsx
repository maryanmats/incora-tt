import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navigation";
import { LoginPage } from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { FeedsPage } from "./pages/FeedsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CommentsPage } from "./pages/CommentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/feeds" element={<FeedsPage />} />
      <Route path="/feeds/:id" element={<CommentsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
