import React, { useState } from "react";
import axios from 'axios';

export default function CardCarrinho({carrinho}) {

  const [count, setCount] = useState(1);
  const valor = parseFloat(carrinho.valor_produto);
  const valorTotal = parseFloat(valor*count);
  const URL = "http://localhost:3001/carrinhoProduto";

    const handleDelete = async (e) => {
      e.preventDefault();
      const del =  await axios.delete(URL,{id : carrinho.id_carrinho});
      console.log(del)      
      console.log(del)
    }

    return (
      <div className="container">
        <form>
      <div className="CardCarrinho">
        <div className="img_produto">{carrinho.foto_produto}</div>
        <p>{carrinho.nome_produto}</p>
        <hr />
        <p>{carrinho.tipo_produto}</p>
        <p>Tamanho: {carrinho.tamanho_produto}</p>
        <p>Preco: {valorTotal}</p>
        <p><button onClick={() => setCount(count - 1)}>-</button>
        { count }
        <button onClick={() => setCount(count + 1)}>+</button>
        <button className="remover" onClick={handleDelete}>Remover</button></p>
      </div>
      </form>
      </div>
    );
  }