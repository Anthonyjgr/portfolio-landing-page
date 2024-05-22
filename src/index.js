import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Twinmotion from "./components/Twinmotion";
import Unrealrender from "./components/Unrealrender";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/twinmotion" element={<Twinmotion />}/>
        <Route path="/unreal" element={<Unrealrender />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
