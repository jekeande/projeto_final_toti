import React, { useState } from "react";
import axios from 'axios';

export default function Cards({produto}) {


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
    await axios.post(URL,data);
  }

    return (
      <div className="Cards">
      <form onSubmit={handleSubmit}>
      <input defaultValue={data.id_produto} onChange={handleChange} />
        <div className="img_produto">
            {produto.foto_produto}
        </div>
        <div className="descricao_produto">
          <p>{produto.nome_produto}</p>
          <hr/>
          <p>{produto.tipo_produto}</p>
          <p>Tamanho: {produto.tamanho_produto}</p>
          <p>Preco: {produto.valor_produto}</p>
        </div>
        <button className="carrinho">Carrinho</button>
      </form>
      </div>
    );
}