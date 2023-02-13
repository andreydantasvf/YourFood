import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles"

export function Request({ status, code, cartItems, paymentMethod }) {
  const { user } = useAuth();
  const checkUserIsAdmin = user.isAdmin == true;


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

  async function handleUpdateStatus(id, status) {
    const confirm = window.confirm("Deseja realmente alterar o status do pedido?");
    if (confirm) {
      await api.patch(`/requests/${id}`, { status })
    }
  }

  console.log(details)
  return (
    <Container>
      <td className={classColor}>
        {
          checkUserIsAdmin
            ?
            <select name="status" onChange={e => handleUpdateStatus(code, e.target.value)}>
              <option value={status}>{status}</option>
              <option value="Pendente">Pendente</option>
              <option value="Preparando">Preparando</option>
              <option value="Entregue">Entregue</option>
            </select>
            :
            status
        }
      </td>
      <td>{code}</td>
      <td>{details.join(", ")}</td>
      <td>{paymentMethod}</td>
    </Container>
  )
}