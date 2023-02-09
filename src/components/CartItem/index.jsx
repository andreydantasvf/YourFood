import { api } from "../../services/api";

import { Container } from "./styles";

export function CartItem({ image, quantity, title, price, handleDelete }) {
  const imageDish = `${api.defaults.baseURL}/files/${image}`;
  return (
    <Container>
      <img src={imageDish} alt={`Imagem do prato ${title}`} />
      <div>
        <h2>{quantity} x {title} <span>R$ {price * quantity}</span></h2>
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </Container>
  )
}