import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "src/components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./src/components/Card";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
