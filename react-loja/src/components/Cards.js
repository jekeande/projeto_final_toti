import React from "react";
import axios from 'axios';

export default function Cards({produto}) { 

const URL = "http://localhost:3001/carrinho"

const handleSubmit = async (event) => {
  event.preventDefault();
  await axios.post(URL);
}

console.log(handleSubmit)

    return (
      <div className="Cards">
        <form onSubmit={handleSubmit}>
          <div className="img_produto">{produto.foto_produto}</div>
          <div className="descricao_produto">
            <p>{produto.nome_produto}</p>
            <hr />
            <p>{produto.tipo_produto}</p>
            <p>Tamanho: {produto.tamanho_produto}</p>
            <p>Preco: {produto.valor_produto}</p>
          </div>
          <button>carrinho</button>
        </form>
      </div>
    );
}