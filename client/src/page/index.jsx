import React from "react";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AppRouter;
