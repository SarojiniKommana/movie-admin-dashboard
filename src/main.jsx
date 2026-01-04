import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MovieProvider } from "./context/MovieContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
        <Toaster position="top-right" /> {/* Notification container */}
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
