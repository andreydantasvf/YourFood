import { BiCopyright } from "react-icons/bi";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <h2>YourFood</h2>
      <span><BiCopyright />2023 - Todos os direitos reservados.</span>
    </Container>
  )
}