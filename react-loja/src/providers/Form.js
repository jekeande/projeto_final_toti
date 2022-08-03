import React from "react";
import { useAuth } from "./Auth";
import Login from "./Login";
import Profile from "./Profile";

export default function Form() {

  const { email } = useAuth();

  console.log('Form', email.name)

  return (
    <div className="Form">
        <h1>Form:{email.name}</h1>
        <Profile />
        <Login />
     </div>
  )
};