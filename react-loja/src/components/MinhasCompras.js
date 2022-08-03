import React, { useEffect, useState } from "react";
import axios from 'axios';
import Compras from "./Compras";

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
//---------------------------------------------------------------------------
const URLA = "http://localhost:3001/pedidosAprovados";

const [stateA, setStateA] = useState([]);

const getDataA = async () => {
  const response = await axios.get(URLA);
  return response;
};

useEffect(() => { 
  getDataA().then((response) => {
    setStateA(response.data)
  })
}, []);
  return (
    <div className="Compras">
      <h1>Compras por Aprovar</h1>
      <h1>{state.id_pedido}</h1>
      {state.map((pedido, key) => (
        <Compras key={key} pedido={pedido} />
      ))}
      <h1>Compras Aprovadas</h1>
      {stateA.map((pedido, key) => (
        <Compras key={key} pedido={pedido} />
      ))}
     </div>
  );
}