import { Container } from "./styles"

export function Request({ status, code, cartItems, paymentMethod }) {
  const details = cartItems.map(cartItem => {
    return (
      `${cartItem.quantity} x ${cartItem.dish[0].title}`
    )
  })

  let classColor;

  switch (status) {
    case "Preparando":
      classColor = 'yellow';
      break;
    case "Entregue":
      classColor = 'green';
      break;
    default:
      classColor = 'red';
  }

  return (
    <Container>
      <td className={classColor}>
        {status}
      </td>
      <td>{code}</td>
      <td>{details.join(", ")}</td>
      <td>{paymentMethod}</td>
    </Container>
  )
}