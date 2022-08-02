import React from "react";
import axios from 'axios';

export default function Cards({produto}) { 

  const URL = "http://localhost:3001/carrinhoprova"
  const URLD = "http://localhost:3001/carrinho"

const handleSubmit = async (event) => {
  event.preventDefault();
  if(produto.id_produto){
    await axios.get(URL,{produto : produto.id_produto});
    console.log('produto registrado')
  }else{
    await axios.post(URLD,{produto : produto.id_produto});
  }
}
    return (
      <div className="container">
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
          <div className="button">  
          <button className="buttonCarrinho">Adicionar ao Carrinho</button>
          </div>
        </form>
      </div>
      </div>
    );
}