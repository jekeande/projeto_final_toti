import React from "react";

export default function CardCarrinho({carrinho}) {
   
    return (
        <div className="Cards">
          <div>{carrinho.nome_produto}</div>
          <div>{carrinho.tamanho_produto}</div>
          <div>{carrinho.tipo_produto}</div>
          <div>{carrinho.quantidade_produto}</div>
          <div>{carrinho.valor_produto}</div>
        </div>
      );
  }