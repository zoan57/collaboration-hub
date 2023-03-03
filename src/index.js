import React from "react";
import { BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename="/">
    <ScrollToTop />
    <Navbar/>
    <App />
  </BrowserRouter>
);
