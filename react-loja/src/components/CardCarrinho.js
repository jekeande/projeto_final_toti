import React, { useState } from "react";
import axios from 'axios';

export default function CardCarrinho({carrinho}) {

  const [count, setCount] = useState(1);
  const valor = parseFloat(carrinho.valor_produto);
  const valorTotal = parseFloat(valor*count);
  const URL = "http://localhost:3001/carrinhoProduto";

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  
  const handleDelete = async () => {
  await axios.delete(URL,{id : carrinho.id_carrinho});
  }

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="CardCarrinho">
            <div className="img_produto">{carrinho.foto_produto}</div>
            <p>{carrinho.nome_produto}</p>
            <hr />
            <p>{carrinho.tipo_produto}</p>
            <p>Tamanho: {carrinho.tamanho_produto}</p>
            <p>Preco: {valorTotal.toFixed(2)}</p>
            <p>
              {count > 1 ? <button className="menos" onClick={() => setCount(count - 1)}>-</button> : false}
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
              <button className="remover" onClick={handleDelete}>
                Remover
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
