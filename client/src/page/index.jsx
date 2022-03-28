import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        }
      />

      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AppRouter;
