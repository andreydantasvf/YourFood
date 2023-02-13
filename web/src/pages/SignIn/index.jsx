import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <h1>YourFood</h1>
      <Form>
        <h2>Faça login</h2>

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}