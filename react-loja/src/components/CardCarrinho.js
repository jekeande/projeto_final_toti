import React from "react";

export default function CardCarrinho({carrinho}) {

    return (
      <div className="CardCarrinho">
        <p>{carrinho.nome_produto}</p>
        <p>{carrinho.tipo_produto}</p>
        <p>Tamanho:{carrinho.tamanho_produto}</p>
        <p><button>-</button>{carrinho.quantidade_produto}<button>+</button></p>
        <p>Preco:{carrinho.valor_produto}</p>
      </div>
    );
  }