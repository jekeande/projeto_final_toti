import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import NovoCliente from './NovoCliente.js';
import Login from "./Login";
import Pedido from "./Pedido";

export default function Router() {
  return (
    <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><p className="Home">Home</p></Link>
                <Link to="/login"><p className="buttonLogin">Login</p></Link>
                <Link to="/pedido"><p className="buttonLogin">pedido</p></Link>
              </div>
              <div className="centro">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/new" element={<NovoCliente />} />
                  <Route exact path="/pedido" element={<Pedido />} />
                </Routes>
              </div>
      </BrowserRouter>
     </div>
  );
};