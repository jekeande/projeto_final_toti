import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardCarrinho from "./CardCarrinho.js";
import {
  Link
} from "react-router-dom";

export default function Carrinho() {

  const URL = "http://localhost:3001/carrinhos";

  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  useEffect(() => {
    getData().then((response) => {
      setState(response.data)
    })
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value)   
  }

  const results = !search ? state : state.filter((dato)=> dato.nome_produto.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="containerCarrinho">
        <div className="buscar">
            <input type="text" placeholder='Buscar Produto por modelo' value={search} onChange={searcher}/>
        </div>
        <div className="Home">
          {results.map((carrinho, key) => (
            <CardCarrinho key={key} carrinho={carrinho} />
          ))}
        </div>
        <div className="container">
          <p>Total da compra: {}</p>
          <Link to="/pedido">
            <button>Finalizar compra</button>
          </Link>
        </div>
    </div>
  );
}