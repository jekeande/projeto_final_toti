import React from "react";

export default function ComprasAprovadas({pedido}) { 

    return (
      <div className="Aprovadas">
        <table>
          <tbody>
            <tr>
              <td>{pedido.id_pedido}</td>
              <td>{pedido.quantidade_produto}</td>
              <td>{pedido.nome_produto}</td>
              <td>{pedido.valor_total_do_carrinho}</td>
              <td>{pedido.estado_do_pedido}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}