import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container } from "./styles";

export function CardDish({ data }) {
  const imageDish = `${api.defaults.baseURL}/files/${data.image}`;

  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/dish/${data.id}`)
  }

  return (
    <Container onClick={handleNavigate}>
      <img src={imageDish} alt={`Imagem de ${data.title}`} />
      <h3>{data.title}</h3>
      <span>{data.description}</span>
      <span className="price">{`R$ ${data.price}`}</span>
    </Container>
  )
}