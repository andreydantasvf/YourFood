import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Ingredient({ title }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      const response = await import(`../../assets/${title}.svg`)
      setImage(response.default);
    }

    fetchImage();
  }, [])

  return (
    <Container>
      {
        image &&
        <img src={image} />
      }
      {title}
    </Container>
  )
}