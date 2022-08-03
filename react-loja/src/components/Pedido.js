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
        <div className="banco">
            <fieldset>
            <legend><h3>Intitucao: Banco do Brasil S.A</h3></legend>
            <p>Tipo de conta: Conta Corrente</p>
            <p>Agencia: 01234</p>
            <p>Conta: 567891020</p>
            <p>PIX: 61991980000</p>
            </fieldset>

            <fieldset>
            <legend><h3>Intitucao: Itau Unibanco S.A</h3></legend>
            <p>Tipo de conta: Conta Corrente</p>
            <p>Agencia: 01234</p>
            <p>Conta: 567891020</p>
            <p>PIX: jekeande@gmail.com</p>
            </fieldset>

            <fieldset>
            <legend><h3>Intitucao: Caixa Economica Federal</h3></legend>
            <p>Tipo de conta: Poupanca</p>
            <p>Agencia: 01234</p>
            <p>Conta: 567891020</p>
            <p>PIX: 61991983364</p>
            </fieldset>
        <fieldset>
            <legend><h3>Pagamento</h3></legend>
            <form onSubmit={handleSubmit}>
              <label><h3>Valor Total:
                  <input
                    type="text"
                    name="valor"
                    defaultValue={data.valor}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Dados do pagamento realizado</h3>
                  <input
                    type="text"
                    name="banco"
                    placeholder="Banco do pagamento"
                    defaultValue={data.banco}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="comprovante"
                    placeholder="N° do comprovante de pagamento"
                    defaultValue={data.comprovante}
                    onChange={handleChange}
                    required
                  />
                  </label>
              <div className="button">                
                <button type="submit">Fazer Pagamento</button>
              </div>
            </form>
            </fieldset>
        </div>
        </div>
  );
}