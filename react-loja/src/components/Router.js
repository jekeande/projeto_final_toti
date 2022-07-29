import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Pedido from "./Pedido";

export default function Router() {
  return (
    <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><p className="Home">Home</p></Link>
                <Link to="/pedido"><p className="buttonLogin">Pedido</p></Link>
              </div>
              <div className="centro">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/pedido" element={<Pedido />} />
                </Routes>
              </div>
      </BrowserRouter>
     </div>
  );
};