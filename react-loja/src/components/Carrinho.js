import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardCarrinho from "./CardCarrinho.js";

export default function Carrinho() {

  const URL = "http://localhost:3001/carrinhos";

  const [state, setState] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  useEffect(() => {
    getData().then((response) => {
      setState(response.data)
    })
  }, []);

  return (
    <div>
      <div className="Home">
      {state.map((carrinho, key) => (
        <CardCarrinho key={key} carrinho={carrinho} />
      ))}
    </div> 
      <p>Total da compra:</p>
      <button>compra</button>
    </div>
    
  );
}