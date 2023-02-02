import { SlMagnifier } from "react-icons/sl"

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

export function Home() {
  return (
    <Container>
      <Header>
        <Input
          placeholder="Busque pelas opções de pratos"
          icon={SlMagnifier}
        />
      </Header>

      <Footer />
    </Container>
  )
}