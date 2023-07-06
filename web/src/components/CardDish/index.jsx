import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function CardDish({ data }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/dish/${data.id}`)
  }

  return (
    <Container onClick={handleNavigate}>
      <img src={data.image} alt={`Imagem de ${data.title}`} />
      <h3>{data.title}</h3>
      <span>{data.description}</span>
      <span className="price">{`R$ ${data.price}`}</span>
    </Container>
  )
}