import Express from 'express';
import bcrypt from 'bcrypt';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import cors from 'cors';

const salt = bcrypt.genSaltSync(10);

const app = Express();

app.use(cors());
app.use(Express.json());

const db = new sqlite3.Database('./data/data_loja.db', (err) => {
    if (err) {
        console.log("Erro ao abrir base de dados " + err.message)
    } else {
        console.log("Conectado com o Banco de Dados")
    }
})
/*------------------------------------------------
-----------------------CRUD CLIENTE---------------
-------------------------------------------------*/

app.post("/cliente",(req, res, next) => {
  const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
    db.run("INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,telefone_cliente,email_cliente,senha_cliente)VALUES(?,?,?,?,?,?,?)",
        [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.telefone, req.body.email, senhaCriptografada],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "Cliente Cadastrado ID": this.lastID
            })
        }) 
})

app.get("/clientes", (req, res, next) => {
    db.all("SELECT * FROM cliente", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});

const confirmaLogin = (req, res, next) => {
    db.get("SELECT senha_cliente FROM cliente WHERE cliente.email_cliente = (?)",
     [req.body.email], (err, rows) => {  
        if (err) {        
            res.json({ error: "Usuário não cadastrado"})          
        } else {          
            const seValido = bcrypt.compareSync(req.body.senha, rows.senha_cliente);          
            if (seValido) {
               next()                  
               } else {
                res.json({ error: "Senha Inválida"})                  
               }
            }
        })
    }

app.post("/login", confirmaLogin, (req, res) =>  {
    res.send("Bem-vindo " + req.body.email)
})

app.put("/cliente",(req, res, next) => {
    const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
      db.run("UPDATE cliente SET cpf_cliente=?, nome_cliente=?, endereco_cliente=?, cep_cliente=?, telefone_cliente=?, email_cliente=?, senha_cliente=? WHERE id_cliente=?",
          [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.telefone, req.body.email, senhaCriptografada, req.body.id],
          function(err, result){
              if(err) {
                  res.status(400).json({ "error": err.message })
                  return;
              }
              res.status(201).json("Cliente atualizado ID")
          }) 
  })

app.delete("/cliente", (req, res, next) => {
    db.all("DELETE FROM cliente WHERE id_cliente=?", [req.body.id],
        res.status(200).json(req.body.id + ": eliminado"));
});

/*--------------------------------------------------
--------------------------CRUD PRODUTO--------------
--------------------------------------------------*/
app.post("/produto",(req, res, next) => {
      db.run("INSERT INTO produto (nome_produto,tamanho_produto,tipo_produto,valor_produto)VALUES(?,?,?,?)",
          [req.body.produto, req.body.tamanho, req.body.tipo, req.body.valor],
          function(err, result){
              if(err) {
                  res.status(400).json({ "error": err.message })
                  return;
              }
              res.status(201).json({
                  "Produto Cadastrado ID": this.lastID
              })
          }) 
  })

app.get("/produtos", (req, res, next) => {
    db.all("SELECT * FROM produto", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(rows);
    });
});

app.get("/produto", (req, res, next) => {
  db.all("SELECT * FROM produto WHERE tipo_produto=?", [req.body.tipo], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      res.status(200).json(rows);
  });
});

app.put("/produto",(req, res, next) => {
      db.run("UPDATE produto SET nome_produto=?, foto_produto=?, tamanho_produto=?, tipo_produto=?, valor_produto=? WHERE id_produto=?",
          [req.body.produto, req.body.foto, req.body.tamanho, req.body.tipo, req.body.valor, req.body.id],
          function(err, result){
              if(err) {
                  res.status(400).json({ "error": err.message })
                  return;
              }
              res.status(201).json("ID: " + req.body.id + " Atualizado")
          }) 
  })

  app.delete("/produto", (req, res, next) => {
    db.all("DELETE FROM produto WHERE id_produto=?", [req.body.id],
        res.status(200).json(req.body.id + ": eliminado"));
});

/*--------------------------------------------------
--------------------------CRUD CARRINHO--------------
--------------------------------------------------*/
app.post("/carrinho",(req, res, next) => {
    db.run("INSERT INTO carrinho (id_cliente,id_produto,id_pedido,quantidade_produto,valor_total_do_carrinho) VALUES (?,?,?,?,?)",
        [req.body.cliente,req.body.produto,req.body.pedido,req.body.quantidade,req.body.valor],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "carrinho Cadastrado ID": this.lastID
            })
        }) 
        console.log(req.body.pedido)
        console.log(req.body.pedido)
        console.log(req.body.pedido)
        console.log(req.body.pedido)
})

app.get("/carrinho", (req, res, next) => {
  db.all("SELECT * FROM carrinho", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      res.status(200).json(rows);
  });
});

app.put("/carrinho",(req, res, next) => {
    db.run("UPDATE carrinho SET quantidade_produto=? WHERE id_carrinho=?",
        [req.body.quantidade, req.body.id],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json("ID: " + req.body.id + " Atualizado")
        }) 
})
app.get("/carrinhos", (req, res, next) => {
    db.all("SELECT id_carrinho,id_pedido,id_cliente,nome_produto,tamanho_produto,tipo_produto,quantidade_produto,valor_produto from carrinho JOIN produto on produto.id_produto=carrinho.id_produto WHERE id_pedido is NULL", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(rows);
    });
  });


app.delete("/carrinhoProduto", (req, res, next) => {
    db.all("DELETE FROM carrinho WHERE id_carrinho=?", [req.body.id],
    function(err, result){
        if(err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.status(200).json(req.body.id + ": eliminado")})
  });

app.delete("/carrinhoCliente", (req, res, next) => {
    db.all("DELETE FROM carrinho WHERE id_cliente=?", [req.body.id],
        res.status(200).json(req.body.id + ": eliminado"));
  });
/*--------------------------------------------------
--------------------------CRUD PEDIDO--------------
--------------------------------------------------*/
app.post("/pedido",(req, res, next) => {
    db.run("INSERT INTO pedido (date_do_pedido,valor_total_do_pedido,banco,num_comprovante,estado_do_pedido) VALUES (?,?,?,?,?)",
        [Date(),req.body.valor, req.body.banco, req.body.comprovante, "por aprovar"],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "Pedido Cadastrado ID": this.lastID
            })
        }) 
})

app.get("/pedidosPorAprovar", (req, res, next) => {
  db.all("SELECT carrinho.id_carrinho, carrinho.id_pedido, carrinho.id_cliente, carrinho.valor_total_do_carrinho, carrinho.quantidade_produto, carrinho.id_produto,produto.nome_produto, produto.tamanho_produto, produto.tipo_produto,cliente.nome_cliente, cliente.cpf_cliente, cliente.endereco_cliente, cliente.cep_cliente, cliente.telefone_cliente, cliente.email_cliente,pedido.date_do_pedido,pedido.valor_total_do_pedido,pedido.banco,pedido.num_comprovante,pedido.estado_do_pedido from carrinho JOIN produto on produto.id_produto=carrinho.id_produto JOIN cliente on cliente.id_cliente=carrinho.id_cliente JOIN pedido on pedido.id_pedido=carrinho.id_pedido GROUP BY carrinho.id_pedido",
  [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      res.status(200).json(rows);
  });
});

app.put("/pedido",(req, res, next) => {
    db.run("UPDATE pedido SET descricao_do_pedido=?, data_do_pedido=?, valor_total_do_pedido=?, comprovante_de_pagamento=?, estado_do_pedido=? WHERE id_pedido=?",
        [req.body.descricao, Date(), req.body.valor, req.body.comprovante, req.body.estado, req.body.id],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json("ID: " + req.body.id + " Atualizado")
        }) 
})

app.delete("/pedido", (req, res, next) => {
  db.all("DELETE FROM pedido WHERE id_pedido=?", [req.body.id],
      res.status(200).json(req.body.id + ": eliminado"));
});

app.listen(3001, () => {
    console.log('Iniciando o Express-JS na porta 3001')
})