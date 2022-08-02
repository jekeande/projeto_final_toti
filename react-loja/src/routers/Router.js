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
  let auth = false;
  return (
    <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><p>Home</p></Link>
                {auth ? false : <Link to="/login"><p>Login</p></Link>}
                {auth ? <Link to="/carrinho"><p>Carrinho</p></Link> : false}
                {auth ? <Link to="/compras"><p>Minhas Compras</p></Link> : false}
                {auth ? <Link to="/Sair"><p>Sair</p></Link> : false}
              </div>
              <div className="centro">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/new" element={<NovoCliente />} />
                  <Route exact path="/pedido" element={auth ? <Pedido /> : <Login />} />
                  <Route exact path="/carrinho" element={auth ? <Carrinho /> : <Login />} />
                  <Route exact path="/compras" element={auth ? <MinhasCompras /> : <Login />} />
                </Routes>
              </div>
      </BrowserRouter>
     </div>
  );
};