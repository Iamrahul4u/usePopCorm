// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieProvider from "./contexts/MovieProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
