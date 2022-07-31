import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/Home.js";
import NovoCliente from '../components/NovoCliente.js';
import Login from "../components/Login.js";
import Pedido from "../components/Pedido.js";
import Carrinho from "../components/Carrinho.js";
import MinhasCompras from "../components/MinhasCompras"

export default function Router() {
  return (
    <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><p>Home</p></Link>
                <Link to="/login"><p>Login</p></Link>
                <Link to="/carrinho"><p>Carrinho</p></Link>
                <Link to="/compras"><p>Minhas Compras</p></Link>
                <Link to="/Sair"><p>Sair</p></Link>
              </div>
              <div className="centro">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/new" element={<NovoCliente />} />
                  <Route exact path="/pedido" element={<Pedido />} />
                  <Route exact path="/carrinho" element={<Carrinho />} />
                  <Route exact path="/compras" element={<MinhasCompras />} />
                </Routes>
              </div>
      </BrowserRouter>
     </div>
  );
};