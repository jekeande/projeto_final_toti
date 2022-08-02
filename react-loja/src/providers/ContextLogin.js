import React from "react";
import { AuthProvider } from "./Auth";
import Form from "./Form";

export default function ContextLogin() {
  return (
    <AuthProvider>
        <Form />
    </AuthProvider>
  )
};