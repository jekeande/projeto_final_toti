import React, { useEffect, useState } from "react";
import axios from 'axios';
import ComprasPorAprovar from "./ComprasPorAprovar";

export default function MinhasCompras() {
  
  const URL = "http://localhost:3001/pedidosPorAprovar";

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
    <div className="Compras">
      <h1>Compras por Aprovar</h1>
      <h1>{state.id_pedido}</h1>
      {state.map((pedido, key) => (
        <ComprasPorAprovar key={key} pedido={pedido} />
      ))}
      <h1>Compras Aprovadas</h1>
     </div>
  );
}