import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Pedido() {

  const Navigate = useNavigate();

  const [data, setData] = useState ({})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3001/pedido"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cliente = await axios.post(URL,data);
    if (cliente){
      Navigate('/');
    }else
     console.error();
  }

  return (
    <div className="container">
      <div className="NewPedido">
            <form onSubmit={handleSubmit}>
              <label><h3>Descricao:
                  <input
                    type="text"
                    name="descricao"
                    defaultValue={data.descricao}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Valor Total:
                  <input
                    type="text"
                    name="valor"
                    defaultValue={data.valor}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Dados do cartao:</h3>
                  <input
                    type="text"
                    name="numero"
                    placeholder="Numero do cartao"
                    defaultValue={data.numero}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="date"
                    placeholder="MM/AA"
                    defaultValue={data.date}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    defaultValue={data.cvc}
                    onChange={handleChange}
                    required
                  />
                  </label>
              <div className="button">                
                <button className="salvar" type="submit">Fazer Pedido</button>
              </div>
            </form>
      </div>
    </div>
  );
}