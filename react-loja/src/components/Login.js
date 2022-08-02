import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {

  const [data, setData] = useState ({email: "", senha: ""})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3001/login"

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(URL,data);
    }catch(error){
      console.log(error)
    }
  }

  console.log(data)

  return (
    <div className="container">
      <div className="NewContact">
        <h1>{data.email}</h1>
            <form onSubmit={handleSubmit}>
              <label><h3>E-mail:
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    defaultValue={data.email}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Senha:
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    defaultValue={data.senha}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <div className="button">                
                <button className="salvar" type="submit">Accese</button>
              </div>
            </form>            
              <div className="buttonNew">
                <Link to={{pathname:`/new`}}>
                  <p className="agr">Cadastrese aqui</p>
                </Link>
              </div>
      </div>
    </div>
  );
}