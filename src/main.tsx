import React from "react";
import App from "./routes";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./utils/context/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
