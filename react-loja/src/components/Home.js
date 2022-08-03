import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cards from "./Cards.js";

export default function Home() {
  const URL = "http://localhost:3001/produtos";

  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  useEffect(() => {
    getData().then((response) => {
      setState(response.data);
    });
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? state
    : state.filter((dato) =>
        dato.nome_produto.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <div>
      <div className="buscar">
        <input
          type="text"
          placeholder="Buscar Produto por modelo"
          value={search}
          onChange={searcher}
        />
      </div>
      <div className="Home">
        {results.map((produto, key) => (
          <Cards key={key} produto={produto} />
        ))}
      </div>
    </div>
  );
}