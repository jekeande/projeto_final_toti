import React from "react";
//import Router from "../routers/Router";
import '../assets/App.css';
import ContextLogin from "../providers/ContextLogin";

export default function App() {
  return (
    <div className="App">
        <ContextLogin />
     </div>
  )
};