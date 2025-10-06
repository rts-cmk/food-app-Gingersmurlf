import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./homepage.jsx";
import Description from "./components/description.jsx";
import Account from "./components/account.jsx";
import NotFound from "./components/notfound.jsx";
import "./css/style.css";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Acount" element={<Account />} />
        <Route path="/Description" element={<Description />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
