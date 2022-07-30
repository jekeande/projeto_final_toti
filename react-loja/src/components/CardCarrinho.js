import React, { useState } from "react";

export default function CardCarrinho({carrinho}) {

  const [count, setCount] = useState(1);
  const valor = parseFloat(carrinho.valor_produto);
  const valorTotal = parseFloat(valor*count)

    return (
      <div className="CardCarrinho">
        <p>{carrinho.nome_produto}</p>
        <p>{carrinho.tipo_produto}</p>
        <p>Tamanho:{carrinho.tamanho_produto}</p>
        <p><button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button></p>
        <p>Preco:{valorTotal}</p>
      </div>
    );
  }