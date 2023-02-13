import { CardDish } from "../CardDish";

import { Container } from "./styles";

export function SectionDish({ title, data }) {
  return (
    <Container>
      <h2>{title}</h2>

      <div className="dishes">
        {data.map(dish => (
          <CardDish
          key={String(dish.id)}
          data={dish} 
          />
        ))}
      </div>
    </Container>
  )
}