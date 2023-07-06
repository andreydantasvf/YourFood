import { Container } from "./styles";

export function CartItem({ image, quantity, title, price, handleDelete }) {
  return (
    <Container>
      <img src={image} alt={`Imagem do prato ${title}`} />
      <div>
        <h2>{quantity} x {title} <span>R$ {price * quantity}</span></h2>
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </Container>
  )
}