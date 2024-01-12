import React from "react";
import "./style.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./Context/GlobalState";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <GlobalProvider>
          <Menu/>
        <Header />
        </GlobalProvider>
      </div>
    </div>
  );
}
