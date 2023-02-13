import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigation("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o usuário!")
        }
      });
  }

  return (
    <Container>
      <h1>YourFood</h1>
      <Form>
        <h2>Crie sua Conta</h2>

        <label htmlFor="name">Seu nome</label>
        <Input
          placeholder="Exemplo: Andrew Christian"
          type="text"
          id="name"
          onChange={e => setName(e.target.value)}
        />

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
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}