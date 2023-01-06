import "./App.css";
import "./scss/app.scss";
import "./components/Header";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Skeleton } from "./components/PizzaBlock/Skeleton";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
